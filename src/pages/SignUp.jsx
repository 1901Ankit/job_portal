import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext'; // Import AuthContext

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const { register } = useAuth(); // Get the register function from context
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset the error state

    try {
      await register({ firstName, lastName, email, password }); // Call register
      navigate('/'); // Redirect to home on successful signup
    } catch (err) {
      console.error('Signup failed', err);

      // Set a specific error message based on the caught error
      if (err.message.includes('already registered')) {
        setError(err.message); // Display the specific error message for duplicate email
      } else {
        setError('Signup failed. Please try again.'); // Generic error message
      }
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={closeModal}
    >
      <div 
        className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-5 relative" 
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={closeModal} 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="John"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Doe"
            />
          </div>
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
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? 
          <span 
            className="text-blue-500 cursor-pointer" 
            onClick={() => {
              closeModal();
              navigate('/login');
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
