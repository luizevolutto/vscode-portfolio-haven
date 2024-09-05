import React from 'react';
import { useParams, Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    name: 'Project 1',
    description: 'A React-based web application',
    fullDescription: 'This is a full-featured React application that demonstrates modern web development practices. It includes state management with Redux, responsive design with Tailwind CSS, and integrates with a RESTful API.',
    image: 'https://via.placeholder.com/600x400',
    languages: ['JavaScript'],
    technologies: ['React', 'Redux', 'Tailwind CSS'],
    category: 'Web Development',
    githubLink: 'https://github.com/yourusername/project1',
    liveDemo: 'https://project1-demo.com',
  },
  {
    id: 2,
    name: 'Project 2',
    description: 'Mobile app for iOS and Android',
    fullDescription: 'A cross-platform mobile application built with React Native. This app showcases real-time data synchronization, offline capabilities, and integration with native device features.',
    image: 'https://via.placeholder.com/600x400',
    languages: ['JavaScript', 'Swift'],
    technologies: ['React Native', 'Firebase'],
    category: 'Mobile Development',
    githubLink: 'https://github.com/yourusername/project2',
    liveDemo: 'https://project2-demo.com',
  },
  // Add more projects here
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <div className="text-white">
      <Link to="/projects" className="text-blue-400 hover:underline mb-4 inline-block">&larr; Back to Projects</Link>
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <img src={project.image} alt={project.name} className="w-full max-w-2xl mb-4 rounded" />
      <p className="mb-4">{project.fullDescription}</p>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Technologies Used</h2>
        <ul className="list-disc list-inside">
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Languages</h2>
        <ul className="list-disc list-inside">
          {project.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Category</h2>
        <p>{project.category}</p>
      </div>
      <div className="flex space-x-4">
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600">
          View on GitHub
        </a>
        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;