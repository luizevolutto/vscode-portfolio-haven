import React from 'react';

const About = () => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-4">
        I'm a passionate developer with experience in various technologies and programming languages.
        My goal is to create efficient and user-friendly applications that solve real-world problems.
      </p>
      <h2 className="text-2xl font-bold mb-2">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        <li>JavaScript (React, Node.js)</li>
        <li>Python</li>
        <li>Java</li>
        <li>SQL</li>
        <li>HTML/CSS</li>
      </ul>
      <h2 className="text-2xl font-bold mb-2">Experience</h2>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Senior Developer at Tech Co.</h3>
        <p className="italic">2018 - Present</p>
        <p>Led development of multiple web and mobile applications.</p>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold">Junior Developer at Start-up Inc.</h3>
        <p className="italic">2015 - 2018</p>
        <p>Contributed to the development of innovative software solutions.</p>
      </div>
    </div>
  );
};

export default About;