import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-4">
        I'm a passionate developer creating amazing web experiences.
      </p>
      <p className="mb-4">
        Explore my projects, learn more about me, or get in touch!
      </p>
      <Link 
        to="/projects" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
      >
        Check out my projects
      </Link>
    </div>
  );
};

export default Home;