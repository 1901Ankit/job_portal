// src/App.jsx

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import JobDetails from "./pages/JobDetails";
import Home from "./pages/Home"; 
import Jobs from "./pages/Jobs"; 
import Contact from "./pages/Contact"; 
import Login from './pages/Login'; 
import SignUp from './pages/SignUp'; 
import jobData from "./JobDummyData";
import { AuthProvider } from './context/AuthContext'; 
import About from "./pages/About";
import NotFound from "./pages/NotFound"; // Create a NotFound component for 404

function App() {
  const [jobs, setJobs] = useState(jobData);
  const [customSearch, setCustomSearch] = useState(false);
  const [jobCriteria, setJobCriteria] = useState({
    title: "",
    location: "",
    experience: "",
    type: ""
  });

  const fetchJobs = () => {
    setCustomSearch(false);
    setJobs(jobData); 
    setJobCriteria({ title: "", location: "", experience: "", type: "" }); 
  };

  const fetchJobsCustom = (criteria) => {
    setCustomSearch(true);
    setJobCriteria(criteria);

    const filteredJobs = jobData.filter((job) => {
      return (
        (criteria.title === "" || job.title === criteria.title) &&
        (criteria.type === "" || job.type === criteria.type) &&
        (criteria.location === "" || job.location === criteria.location) &&
        (criteria.experience === "" || job.experience === criteria.experience)
      );
    });

    setJobs(filteredJobs);
  };

  useEffect(() => {
    fetchJobs(); 
  }, []);

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs fetchJobsCustom={fetchJobsCustom} />} />
            <Route path="/about" element={<About />} />
            <Route path="/job-details" element={<JobDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
