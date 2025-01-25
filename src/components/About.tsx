import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-6">
          Full Stack Engineer | React, Node.js, & Cloud Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 md:px-16 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center mb-10">About Me</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
          I specialize in building scalable, user-friendly web applications
          using modern technologies.
        </p>
      </section>
    </div>
  );
};

export default About;
