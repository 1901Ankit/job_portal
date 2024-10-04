import React, { createContext, useContext, useState } from 'react';

// Create Auth Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('token') || null; // Get token from localStorage
  });

  const login = (userData, token) => {
    const userToStore = {
      id: userData.id,
      email: userData.email,
      firstName: userData.firstName,
      lastName: userData.lastName,
    };

    setUser(userToStore); // Set user data on login
    setToken(token); // Set token
    localStorage.setItem('user', JSON.stringify(userToStore)); // Save user to local storage
    localStorage.setItem('token', token); // Save token to local storage
  };

  const logout = () => {
    setUser(null); // Clear user data on logout
    setToken(null); // Clear token on logout
    localStorage.removeItem('user'); // Remove user from local storage
    localStorage.removeItem('token'); // Remove token from local storage
  };

  const register = async (userData) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Registration failed');
      }
  
      const result = await response.json();
      console.log('Response from server:', result); // Log the entire response
  
      const user = result.user; // Extract user data
  
      // Check if user data exists and has the necessary properties
      if (user && user.id) {
        login(user, null); // Log in the user after successful registration without a token
        console.log('User logged in:', user); // Log user details
      } else {
        throw new Error('User data is missing');
      }
  
    } catch (err) {
      console.error('Registration failed', err);
      throw err; // Re-throw the error to handle it in the component
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      const result = await response.json();
      console.log('Response from server:', result); // Log the entire response

      const user = result.user; // Extract user data
      const token = result.token; // Extract JWT token

      // Check if user data exists and has the necessary properties
      if (user && user.id && token) {
        login(user, token); // Log in the user after successful login
        console.log('User logged in:', user); // Log user details
      } else {
        throw new Error('User data is missing');
      }

    } catch (err) {
      console.error('Login failed', err);
      throw err; // Re-throw the error to handle it in the component
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register, loginUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  return useContext(AuthContext);
};
