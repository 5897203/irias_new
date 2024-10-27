import React from 'react';

const Hero = () => {
  return (
    <div className="relative pt-16 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 mix-blend-multiply" />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
          alt="Earth from space"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            International Research Institute for Advanced Systems
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Advancing the frontiers of systems science and cybernetics through innovative research and international collaboration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;