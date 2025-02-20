import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Portfolio Website',
    description:
      'My personal portfolio website showcasing my skills and projects.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Digital Ocean'],
    githubLink: 'https://github.com/your-username/portfolio-website',
    liveDemo: 'https://stredaweb.dev/'
  },
  {
    id: 2,
    title: 'Restaurant App',
    description:
      'A full-stack restaurant app for managing menus, orders, and customers.',
    technologies: [
      'React',
      'JavaScript',
      'Node.js',
      'MongoDB',
      'Heroku',
      'Stripe'
    ],
    githubLink: 'https://github.com/your-username/restaurant-app',
    liveDemo: 'https://truefood.rest'
  },

  {
    id: 3,
    title: 'To-do List App',
    description:
      'A digital tool that allows users to create and manage lists of tasks they need to complete, such as marking items as finished and active.',
    technologies: ['React', 'Redux', 'JavaScript', 'Stripe'],
    githubLink: 'https://github.com/your-username/ecommerce-platform',
    liveDemo: 'https://mytodolistapps.com'
  }
];

const Projects: React.FC = () => {
  return (
    <div className="projects-container bg-gray-50 py-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              {project.title}
            </h2>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="mb-4">
              <span className="text-sm font-semibold text-gray-600">
                Technologies:
              </span>
              <ul className="flex flex-wrap gap-2 mt-2">
                {project.technologies.map((tech, index) => (
                  <li
                    key={index}
                    className="bg-blue-100 text-blue-700 text-sm px-2 py-1 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between items-center">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-semibold hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
