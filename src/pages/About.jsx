// src/pages/About.jsx

import React from 'react';
import { FaUsers, FaRocket, FaHandshake, FaRegLightbulb } from 'react-icons/fa'; // Importing icons from react-icons

const About = () => {
  return (
    <div className="relative mx-10 my-10 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-gray-800 text-center animate-fade-in">About Us</h1>
      <p className="mt-4 text-lg text-gray-800 animate-fade-in">
        Welcome to <span className="font-semibold">WishGeeks</span>, a forward-thinking company dedicated to revolutionizing the job search process. We are in the process of launching our innovative job portal designed to connect talented candidates with top employers.
      </p>
      <p className="mt-4 text-lg text-gray-800 animate-fade-in">
        At WishGeeks, our mission is to create a user-friendly platform that not only helps job seekers find their dream jobs but also provides companies with the best talent. We are committed to making the hiring process seamless and efficient for everyone involved.
      </p>

      {/* Mission Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 animate-fade-in">Our Mission</h2>
        <div className="flex items-center mt-2">
          <FaRocket className="text-4xl text-gray-800 animate-bounce mr-2" />
          <p className="text-lg text-gray-800 animate-fade-in">
            To empower both job seekers and employers by providing a comprehensive platform that enhances the hiring experience.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 animate-fade-in">Our Values</h2>
        <ul className="mt-2 list-disc list-inside text-lg text-gray-800">
          <li className="flex items-center mt-2">
            <FaHandshake className="text-2xl text-gray-800 animate-bounce mr-2" />
            Integrity: We believe in honesty and transparency in all our dealings.
          </li>
          <li className="flex items-center mt-2">
            <FaRegLightbulb className="text-2xl text-gray-800 animate-bounce mr-2" />
            Innovation: We strive to leverage the latest technology to enhance the hiring process.
          </li>
          <li className="flex items-center mt-2">
            <FaUsers className="text-2xl text-gray-800 animate-bounce mr-2" />
            Community: We are committed to supporting job seekers and employers in building a stronger workforce.
          </li>
        </ul>
      </div>

      {/* Team Section */}
      <div className="mt-8">
        <h2 className="text-3xl font-semibold text-gray-800 animate-fade-in">Join Our Team</h2>
        <p className="mt-2 text-lg text-gray-800 animate-fade-in">
          As we prepare to launch our job portal, we are also looking to expand our team. If you are passionate about connecting talent with opportunity, we would love to hear from you!
        </p>
      </div>
    </div>
  );
};

export default About;
