//~ Setting Up a Real-Time App with Render
import path from 'path';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import winston from 'winston';

// Load environment variables
dotenv.config();

// Set up Winston logger
// Winston logger setup should be placed at the top of the file so it is globally accessible throughout the server. This allows to use the logger for logging messages, errors, or other information wherever necessary in the code.
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console() // Log to console as well
  ]
});

logger.info('EMAIL_USER:', process.env.EMAIL_USER);
logger.info('EMAIL_PASS:', process.env.EMAIL_PASS ? 'Loaded' : 'Not Loaded');
logger.info('EMAIL_RECEIVER:', process.env.EMAIL_RECEIVER);

// Log that the server is starting
logger.info('Initializing server...');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || '*', // Use specific origins in production
    methods: ['GET', 'POST']
  }
});

app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle WebSocket connections
io.on('connection', (socket) => {
  logger.info(`A user connected: ${socket.id}`); // Log user connection

  // Listen for form submissions
  socket.on('send_message', async (data) => {
    const { name, email, message } = data;

    // Validate data
    if (!name || !email || !message) {
      logger.warn('Invalid form submission attempt'); // Log a warning
      socket.emit('form_error', 'All fields are required.');
      return;
    }

    try {
      // Configure Nodemailer
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      
      const mailOptions = {
        from: email,
        to: process.env.EMAIL_RECEIVER, // Use an environment variable for receiver
        subject: `New Contact Form Submission from ${name}`,
        text: `Message: ${message}\n\nFrom: ${name} (${email})`
      };

      // Send email
      await transporter.sendMail(mailOptions);

      logger.info(`Email sent successfully from ${email}`); // Log success
      socket.emit('form_success', 'Message sent successfully!');
    } catch (error) {
      logger.error('Email sending failed:', { error }); // Log the error
      socket.emit('form_error', 'Failed to send message.');
    }
  });

  // Handle disconnections
  socket.on('disconnect', () => {
    logger.info(`A user disconnected: ${socket.id}`); // Log disconnection
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`); // Log server start
});
