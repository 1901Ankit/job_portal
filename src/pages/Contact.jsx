



// src/pages/Contact.jsx

import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="mx-auto max-w-2xl my-10 p-8 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-center mb-6 text-white animate-fade-in">
        Contact Us
      </h1>
      {submitted && (
        <motion.div 
          className="mb-4 text-center text-green-300 animate-fade-in"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for your message! We'll get back to you soon.
        </motion.div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            placeholder="Your message"
            rows="5"
          />
        </div>
        <motion.button 
          type="submit" 
          className="flex items-center justify-center w-full bg-blue-600 text-white rounded-lg py-2 hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05 }} // Scale effect on hover
        >
          <FaPaperPlane className="mr-2 animate-bounce" /> {/* Icon with bounce animation */}
          Send Message
        </motion.button>
      </form>
    </div>
  );
};

export default Contact;
