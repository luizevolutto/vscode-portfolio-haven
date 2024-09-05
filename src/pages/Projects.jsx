import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'A React-based web application',
    image: 'https://via.placeholder.com/300x200',
    languages: ['JavaScript'],
    technologies: ['React', 'Redux'],
    category: 'Web Development',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Mobile app for iOS and Android',
    image: 'https://via.placeholder.com/300x200',
    languages: ['JavaScript', 'Swift'],
    technologies: ['React Native'],
    category: 'Mobile Development',
  },
  // Add more projects here
];

const Projects = () => {
  const [filters, setFilters] = useState({
    language: '',
    technology: '',
    category: '',
  });

  const handleFilterChange = (filterType, value) => {
    setFilters({ ...filters, [filterType]: value });
  };

  const filteredProjects = projects.filter((project) => {
    return (
      (filters.language === '' || project.languages.includes(filters.language)) &&
      (filters.technology === '' || project.technologies.includes(filters.technology)) &&
      (filters.category === '' || project.category === filters.category)
    );
  });

  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      <div className="mb-4 flex space-x-4">
        <select
          className="bg-gray-700 p-2 rounded"
          onChange={(e) => handleFilterChange('language', e.target.value)}
          value={filters.language}
        >
          <option value="">All Languages</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Swift">Swift</option>
          {/* Add more language options */}
        </select>
        <select
          className="bg-gray-700 p-2 rounded"
          onChange={(e) => handleFilterChange('technology', e.target.value)}
          value={filters.technology}
        >
          <option value="">All Technologies</option>
          <option value="React">React</option>
          <option value="Redux">Redux</option>
          <option value="React Native">React Native</option>
          {/* Add more technology options */}
        </select>
        <select
          className="bg-gray-700 p-2 rounded"
          onChange={(e) => handleFilterChange('category', e.target.value)}
          value={filters.category}
        >
          <option value="">All Categories</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
          {/* Add more category options */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-gray-800 rounded-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
              <p className="mb-4">{project.description}</p>
              <Link
                to={`/projects/${project.id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;