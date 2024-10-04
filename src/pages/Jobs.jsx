// src/pages/Jobs.jsx

import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import jobData from '../JobDummyData'; // Assuming this is the data source
import SearchBar from '../components/SearchBar'; // Importing the SearchBar

const Jobs = ({ fetchJobsCustom }) => {
    const [filteredJobs, setFilteredJobs] = useState(jobData); // Initialize with all jobs
    const [jobCriteria, setJobCriteria] = useState({
        title: '',
        type: '',
        location: '',
        experience: ''
    });

    const fetchJobs = () => {
        setFilteredJobs(jobData); // Reset to default job listings
        setJobCriteria({ title: '', type: '', location: '', experience: '' }); // Reset search criteria
    };

    const fetchJobsCustomHandler = async (criteria) => {
        await fetchJobsCustom(criteria);

        const filtered = jobData.filter(job => {
            return (
                (criteria.title ? job.title === criteria.title : true) &&
                (criteria.type ? job.type === criteria.type : true) &&
                (criteria.location ? job.location === criteria.location : true) &&
                (criteria.experience ? job.experience === criteria.experience : true)
            );
        });
        setFilteredJobs(filtered);
    };

    return (
        <div className="mx-40 my-10">
 {/* <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-6 relative">
  <span className="absolute inset-0 bg-yellow-200 rounded-lg blur-lg -z-10"></span>
  Job Listings
</h1> */}

{/* <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-6 glow-effect">
  Job Listings
</h1> */}






            <SearchBar fetchJobsCustom={fetchJobsCustomHandler} jobCriteria={jobCriteria} setJobCriteria={setJobCriteria} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {filteredJobs.map(job => <JobCard key={job.id} {...job} />)}
            </div>
        </div>
    );
};

export default Jobs;
