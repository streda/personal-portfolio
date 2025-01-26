// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// // Load environment variables
// dotenv.config();

// // Configure the transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });

// // Configure the email options
// const mailOptions = {
//   from: process.env.EMAIL_USER,
//   to: process.env.EMAIL_RECEIVER,
//   subject: 'Test Email',
//   text: 'This is a test email.',
// };

// // Send the email
// transporter.sendMail(mailOptions, (err, info) => {
//   if (err) {
//     console.error('Error:', err); // Print the whole error
//     if ((err as any).code) {
//       // Check if the error object has a 'code' property
//       console.error('Error Code:', (err as any).code);
//     }
//     return;
//   }
//   console.log('Email sent:', info.response);
// });
