import React from 'react';

const Home = () => {
  return (
    <>
    <section className="w-full min-h-screen py-12 px-4 md:px-8">
  <div className="container mx-auto flex flex-col items-center justify-center space-y-12">
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 py-4 rounded-xl text-center">
      <h1 className="text-3xl lg:text-5xl font-bold text-white font-mono mt-4">Get Fit, Stay Strong, Live Happy</h1>
      <h2 className="text-2xl lg:text-3xl font-bold text-white mt-4">Your journey to a healthier lifestyle starts here.</h2>
      <p className="text-lg lg:text-xl font-bold text-white mt-4">Discover personalized fitness plans tailored just for you by Kush.</p>
      <button className="bg-white text-violet-600 font-bold py-2 px-4 rounded-lg mt-4 hover:text-violet-800 mb-4">
        <a href="/exercises">Get Started</a>
      </button>
    </div>
    <div className="flex flex-wrap md:flex-row gap-6 justify-evenly items-center">
      <div className="w-full md:w-1/3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-4 rounded-xl text-center">
        <h3 className="text-2xl text-white font-semibold">Why Us?</h3>
        <p className="text-lg text-gray-300">We are a fitness tracking platform that provides personalized fitness plans tailored just for you.</p>
      </div>
      <div className="w-full md:w-1/3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-4 rounded-xl text-center">
        <h3 className="text-2xl text-white font-semibold">Our Team</h3>
        <p className="text-lg text-gray-300">Our team consists of experienced fitness enthusiasts who are willing about helping you.</p>
      </div>
      <div className="w-full md:w-1/3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 px-6 py-4 rounded-xl text-center">
        <h3 className="text-2xl text-white font-semibold">Our Services</h3>
        <p className="text-lg text-gray-300">Our platform offers a variety of range of fitness services to help you achieve your fitness goals.</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default Home;
