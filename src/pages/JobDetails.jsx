import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import dayjs from 'dayjs';
import ContactInfo from '../components/ContactInfo';
import ResumeUpload from '../components/ResumeUpload';

function JobDetails() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { user } = useAuth();

  const { title, company, type, experience, location, skills, postedOn, overview } = state;

  const date1 = dayjs(Date.now());
  console.log(date1)
  const diffInDays = date1.diff(dayjs(postedOn), 'day');
  console.log("raju",diffInDays)

  // Modal state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleApplyNowClick = () => {
    if (!user) {
      navigate('/login');
    } else {
      setIsContactModalOpen(true);
    }
  };

  const closeModals = () => {
    setIsContactModalOpen(false);
    setIsResumeModalOpen(false);
    setSuccessMessage(''); // Reset success message when closing modals
  };

  const handleContactInfoComplete = () => {
    setSuccessMessage('Contact information saved successfully!'); // Set success message
    setIsContactModalOpen(false);
    setIsResumeModalOpen(true);
  };

  // New function to handle resume upload completion
  const handleResumeUploadComplete = () => {
    setSuccessMessage('Resume uploaded successfully!'); // Set success message
    setIsResumeModalOpen(false);
  };

  return (
    <div className="mx-40 my-10">
      <div className="border-t-[20px] border-[#338dfb] shadow-md rounded-xl p-6 bg-white">
        <h1 className="text-3xl font-bold">{title}</h1>
        <h2 className="text-xl font-semibold mt-2">{company}</h2>
        <p className="font-semibold mt-2">{type} &#x2022; {experience} &#x2022; {location}</p>
        <p className="text-gray-600 mt-4">{overview}</p>
        
        <div className="flex items-center gap-2 mt-4">
          {skills.map((skill, i) => (
            <span key={i} className="text-gray-500 py-1 px-2 rounded-md border border-black">
              {skill}
            </span>
          ))}
        </div>

        <p className="font-semibold text-gray-500 mt-4">
          Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
        </p>

        <button 
          onClick={handleApplyNowClick} 
          className="mt-4 w-full bg-[#338dfb] text-white rounded-lg shadow-md py-2">
          Apply Now
        </button>
        
        {/* Success Message */}
        {successMessage && (
          <p className="text-green-500 mt-4 font-semibold border border-green-500 p-2 rounded-md">
            {successMessage}
          </p>
        )}
      </div>

      {/* Contact Info Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-5">
            <ContactInfo onComplete={handleContactInfoComplete} />
            <button 
              onClick={closeModals} 
              className="mt-4 w-full bg-red-500 text-white rounded-md py-2">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Resume Upload Modal */}
      {isResumeModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/3 p-5">
            <ResumeUpload onUploadComplete={handleResumeUploadComplete} /> {/* Pass the callback here */}
            <button 
              onClick={closeModals} 
              className="mt-4 w-full bg-red-500 text-white rounded-md py-2">
              Close
            </button>
          </div>
        </div>
      )}
      
      {/* Other Job Listings and Search Functionality */}
      {/* ... */}
    </div>
  );
}

export default JobDetails;
