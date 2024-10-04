import React from 'react';
import { useNavigate } from 'react-router-dom';

const techIcons = [
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/react.svg', alt: 'React' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/javascript.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/html5.svg', alt: 'HTML' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/css3.svg', alt: 'CSS' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/python.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/java.svg', alt: 'Java' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/git.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/wordpress.svg', alt: 'WordPress' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/angular.svg', alt: 'Angular' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/typescript.svg', alt: 'TypeScript' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/ruby.svg', alt: 'Ruby' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/sass.svg', alt: 'Sass' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/less.svg', alt: 'Less' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/sqlite.svg', alt: 'SQLite' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/postgresql.svg', alt: 'PostgreSQL' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mysql.svg', alt: 'MySQL' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/mongodb.svg', alt: 'MongoDB' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/django.svg', alt: 'Django' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/flask.svg', alt: 'Flask' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/firebase.svg', alt: 'Firebase' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/express.svg', alt: 'Express.js' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/nextdotjs.svg', alt: 'Next.js' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/gatsby.svg', alt: 'Gatsby' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/redux.svg', alt: 'Redux' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/webpack.svg', alt: 'Webpack' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/babel.svg', alt: 'Babel' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/laravel.svg', alt: 'Laravel' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/spring.svg', alt: 'Spring' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/aspnet.svg', alt: 'ASP.NET' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/docker.svg', alt: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/kubernetes.svg', alt: 'Kubernetes' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/aws.svg', alt: 'AWS' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/azure.svg', alt: 'Azure' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/google-cloud.svg', alt: 'Google Cloud' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/powershell.svg', alt: 'PowerShell' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bash.svg', alt: 'Bash' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/visual-studio-code.svg', alt: 'Visual Studio Code' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/eclipse.svg', alt: 'Eclipse' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/intellijidea.svg', alt: 'IntelliJ IDEA' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/atom.svg', alt: 'Atom' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/gitlab.svg', alt: 'GitLab' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/github.svg', alt: 'GitHub' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/bitbucket.svg', alt: 'Bitbucket' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/slack.svg', alt: 'Slack' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/zoom.svg', alt: 'Zoom' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/jira.svg', alt: 'Jira' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/confluence.svg', alt: 'Confluence' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/trello.svg', alt: 'Trello' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/notion.svg', alt: 'Notion' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/figma.svg', alt: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/adobephotoshop.svg', alt: 'Adobe Photoshop' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/adobeillustrator.svg', alt: 'Adobe Illustrator' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/sketch.svg', alt: 'Sketch' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/figma.svg', alt: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/illustrator.svg', alt: 'Illustrator' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/photoshop.svg', alt: 'Photoshop' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/invision.svg', alt: 'InVision' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/aftereffects.svg', alt: 'After Effects' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/figma.svg', alt: 'Figma' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/zoom.svg', alt: 'Zoom' },
  { src: 'https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/discord.svg', alt: 'Discord' },
];


const Home = () => {
  const navigate = useNavigate();

  const handleBrowseJobs = () => {
    navigate('/jobs');
  };

  return (
<div className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Technology Icons Marquee */}
    <div className="absolute top-5 left-0 right-0 flex justify-center">
        <div className="whitespace-nowrap overflow-hidden w-[1200px]"> {/* Fixed width for marquee */}
            <div className="flex animate-marquee" style={{ animationDuration: '12s' }}>
                {techIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.alt}
                        className="h-24 mx-6 transform transition-transform duration-300 hover:scale-110"
                        style={{
                            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)) brightness(1.3)',
                            filter: 'invert(1)', // Invert colors to white
                        }}
                    />
                ))}
                {/* Duplicating icons for seamless scrolling */}
                {techIcons.map((icon, index) => (
                    <img
                        key={`duplicate-${index}`}
                        src={icon.src}
                        alt={icon.alt}
                        className="h-24 mx-6 transform transition-transform duration-100 hover:scale-110"
                        style={{
                            filter: 'drop-shadow(0 0 5px rgba(255, 255, 255, 0.7)) brightness(1.3) hue-rotate(150deg)',
                        }}
                    />
                ))}
            </div>
        </div>
    </div>

    {/* Background Video */}
    <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
        src="https://example.com/job-video.mp4" // Replace with your job portal-related video
        alt="Background video"
    />

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>

    {/* Content */}
    <div className="relative z-10 text-center text-white p-10 rounded-lg">
        <h1 className="text-6xl font-bold animate-fade-in">Welcome to WishGeeks JobPortal!</h1>
        <p className="mt-6 text-xl animate-fade-in text-opacity-75">
            Find your dream job with ease. Explore various job listings and apply in just a few clicks.
        </p>

        {/* Call-to-action Buttons */}
        <div className="mt-8 space-x-4">
            <button
                onClick={handleBrowseJobs}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg animate-bounce"
            >
                Browse Jobs
            </button>
            <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-lg">
                Post a Job
            </button>
        </div>
    </div>

    {/* Marquee Animation Style */}
    <style>
        {`
            @keyframes marquee {
                0% { transform: translateX(0) rotateY(0) scale(1); }
                75% { transform: translateX(-100%) rotateY(0) scale(1); }
                80% { transform: translateX(-100%) rotateY(0) scale(1); }
                85% { transform: translateX(-100%) rotateY(-15deg) scale(1.1); }
                90% { transform: translateX(-100%) rotateY(15deg) scale(1.1); }
                95% { transform: translateX(0) rotateY(0) scale(1.1); }
                100% { transform: translateX(0) rotateY(0) scale(1); }
            }
            .animate-marquee {
                animation: marquee 12s ease-in-out infinite;
            }
        `}
    </style>
</div>






  );
};

export default Home;





// import React from 'react';

// const Home = () => {
//   return (
//     <div className="mx-40 my-10 bg-opacity-80 bg-[#1f2937] p-10 rounded-lg shadow-lg"> {/* Add background color, padding, rounded corners, and shadow */}
//       <h1 className="text-4xl font-bold text-white">Welcome to WishGeeks JobPortal!</h1>
//       <p className="mt-4 text-lg text-gray-300">Find your dream job easily with our platform. Browse through various job listings and apply with just a few clicks.</p>
//     </div>
//   );
// };

// export default Home;

