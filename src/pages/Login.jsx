import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Importing AuthContext
import { FaTimes } from 'react-icons/fa'; // Importing an icon from react-icons

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold error messages
  const { loginUser } = useAuth(); // Getting the login function from context
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(true); // State to manage modal visibility

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear previous error messages
    try {
      // Call the loginUser function from AuthContext
      await loginUser(email, password);
      navigate('/'); // Redirect to home on successful login
    } catch (err) {
      console.error('Login failed', err);
      setError('Login failed. Please check your credentials and try again.'); // Set error message
    }
  };

  const closeModal = () => {
    setIsOpen(false); // Set modal visibility to false
  };

  if (!isOpen) return null; // Do not render anything if the modal is closed

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={closeModal} // Close modal on background click
    >
      <div 
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-5 relative" // Add relative positioning to parent div
        onClick={(e) => e.stopPropagation()} // Prevent click from closing modal when clicking inside
      >
        <button 
          onClick={closeModal} // Close modal on button click
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={24} /> {/* Close icon */}
        </button>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>} {/* Display error message */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="you@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="********"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#338dfb] text-white rounded-lg py-2 mt-2 hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? 
          <span 
            className="text-blue-500 cursor-pointer" 
            onClick={() => {
              closeModal(); // Close modal before navigating
              navigate('/signup');
            }}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
