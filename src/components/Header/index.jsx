import React from 'react';

function Header() {
  return (
    <div className="mt-32 flex flex-col gap-8 items-center justify-center text-white relative">
      {/* Main Heading with Gradient Text */}
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 tracking-tight leading-tight text-center animate-fade-in">
        Your Ideal Job Awaits
      </h1>

      {/* Subheading */}
      <p className="text-2xl text-center text-gray-200 tracking-wide mt-4 animate-fade-in delay-500">
        Discover the latest job openings that suit you best!
      </p>

      {/* Animated Decorative Element */}
      <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-500 rounded-full animate-pulse"></div>

     
    </div>
  );
}

export default Header;
