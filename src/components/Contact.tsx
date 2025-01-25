import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

// Connect to the Socket.IO server
// const socket = io('http://localhost:5000'); // Replace with your backend's URL in production
const backendUrl = process.env.REACT_APP_BACKEND_URL;
const socket = io(backendUrl);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('All fields are required.');
      setIsLoading(false);
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('Please enter a valid email address.');
      setIsLoading(false);
      return;
    }

    if (formData.message.length > 1000) {
      setStatus('Message is too long (max 1000 characters).');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setStatus(null); // Reset status message

    try {
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setStatus('Network error. Please try again later.');
    } finally {
      setIsLoading(false);
    }

    // Emit the message to the server via Socket.IO
    socket.emit('send_message', formData);
  };

  useEffect(() => {
    // Listen for success or error messages from the server
    socket.on('form_success', (message: string) => {
      setStatus(message);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' }); // Reset the form
    });

    socket.on('form_error', (error: string) => {
      setStatus(error);
    });

    return () => {
      // Clean up Socket.IO listeners when the component unmounts
      socket.off('form_success');
      socket.off('form_error');
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          Contact Me
        </h1>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-600 font-medium">
              {status || 'Thank you for your message!'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder="Enter your name"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Enter your email"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Write your message here"
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
        {status && (
          <p className="mt-4 text-center text-sm text-red-600">{status}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
