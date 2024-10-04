// src/components/Navbar/index.jsx

import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faBriefcase, faPhone, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogoutClick = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='h-20 flex items-center justify-between bg-blue-600 shadow-md fixed top-0 left-0 w-full z-10 text-white'>
      <div className='text-3xl pl-20 font-bold'>WishGeeks JobPortal.</div>
      <div className='pr-20'>
        <ul className='flex space-x-8'>
          <Link to="/" className='flex items-center hover:bg-blue-700 transition duration-300 ease-in-out cursor-pointer rounded-lg p-2'>
            <FontAwesomeIcon icon={faHome} className='mr-1' /> Home
          </Link>
          <Link to="/jobs" className='flex items-center hover:bg-green-700 transition duration-300 ease-in-out cursor-pointer rounded-lg p-2'>
            <FontAwesomeIcon icon={faBriefcase} className='mr-1' /> Jobs
          </Link>
          <Link to="/about" className='flex items-center hover:bg-purple-700 transition duration-300 ease-in-out cursor-pointer rounded-lg p-2'>
            <FontAwesomeIcon icon={faInfoCircle} className='mr-1' /> About
          </Link>
          <Link to="/contact" className='flex items-center hover:bg-red-700 transition duration-300 ease-in-out cursor-pointer rounded-lg p-2'>
            <FontAwesomeIcon icon={faPhone} className='mr-1' /> Contact
          </Link>
          {user ? (
            <div className='flex items-center space-x-2'>
              <span 
                className='flex items-center hover:bg-gray-700 transition duration-300 ease-in-out cursor-pointer rounded-lg p-2' 
                onClick={handleLogoutClick}>
                <FontAwesomeIcon icon={faSignOutAlt} className='mr-1' /> Logout
              </span>
              <span className='flex items-center'>
                <FontAwesomeIcon icon={faUser} className='mr-1' /> {user.email}
              </span>
            </div>
          ) : (
            <Link to="/login" className='flex items-center hover:bg-orange-700 transition duration-300 ease-in-out cursor-pointer rounded-lg p-2'>
              <FontAwesomeIcon icon={faUser} className='mr-1' /> Login
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
