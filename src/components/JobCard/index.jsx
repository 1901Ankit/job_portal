import React from 'react';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'; // Import icons from react-icons

function JobCard({ title, company, type, experience, location, skills, postedOn, job_link }) {
    const navigate = useNavigate();
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(dayjs(postedOn), 'day'); // Calculate days difference from posted date

    const handleApplyClick = () => {
        navigate('/job-details', { state: { title, company, type, experience, location, skills, postedOn, job_link, overview: 'Sample overview' } });
    };

    const handleShareClick = (platform) => {
        const shareUrl = `https://www.example.com/job-details/${job_link}`; // Replace with actual link
        let shareMessage = `Check out this job: ${title} at ${company}`;

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareMessage)}`, '_blank');
                break;
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareMessage)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
                break;
            case 'linkedin':
                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(shareMessage)}`, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <div className="job-card max-w-xs mx-auto border border-[#338dfb] rounded-xl shadow-lg bg-white hover:bg-[#f7faff] transition-colors duration-300 mt-6 p-6">
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <h5 className="uppercase font-bold text-xl">{title}</h5>
                    <p className="font-semibold mt-2">{company} &#x2022; {type} &#x2022; {experience} &#x2022; {location}</p>
                    <div className="flex items-center gap-2 mt-3 flex-wrap">
                        {skills.map((skill, i) => (
                            <p key={i} className="text-gray-500 py-1 px-3 rounded-md border border-gray-300">
                                {skill}
                            </p>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col items-start md:items-end mt-4">
                    <p className="font-semibold text-gray-500">
                        Posted {diffInDays > 1 ? `${diffInDays} days` : `${diffInDays} day`} ago
                    </p>
                    <button 
                        onClick={handleApplyClick} 
                        className="mt-4 w-full bg-[#338dfb] text-white rounded-lg shadow-md py-2 hover:bg-[#007bff] transition-colors duration-300"
                    >
                        Apply
                    </button>
                </div>

                {/* Share Section */}
                <div className="mt-4 flex justify-between items-center border-t border-gray-300 pt-4">
                    <p className="font-semibold text-gray-500">Share this job:</p>
                    <div className="flex space-x-3">
                        <button onClick={() => handleShareClick('facebook')} className="text-blue-600 hover:text-blue-800 transition duration-200">
                            <FaFacebookF size={20} />
                        </button>
                        <button onClick={() => handleShareClick('twitter')} className="text-blue-400 hover:text-blue-600 transition duration-200">
                            <FaTwitter size={20} />
                        </button>
                        <button onClick={() => handleShareClick('linkedin')} className="text-blue-700 hover:text-blue-900 transition duration-200">
                            <FaLinkedinIn size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
