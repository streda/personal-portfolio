import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="resume-container bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        {/* Header Section */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Samuel Reda</h1>
          <p className="text-gray-600">
            Full Stack Engineer | React | Node.js | DigitalOcean
          </p>
          <p className="text-gray-600">
            Email: <span className="text-blue-500">email@example.com</span> |
            Phone: (123) 456-7890
          </p>
          <p className="text-gray-600">Location: San Diego, CA</p>
        </header>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>TypeScript</li>
            <li>Vanilla JavaScript</li>
            <li>REST APIs</li>
            <li>CI/CD Pipelines</li>
            <li>Unit Testing (Jest)</li>
          </ul>
        </section>

        {/* Programming Languages Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Programming Languages
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li>JavaScript</li>
            <li>HTML</li>
            <li>C</li>
            <li>TypeScript</li>
            <li>CSS</li>
            <li>C++</li>
            <li>Java</li>
            <li>Python</li>
          </ul>
        </section>

        {/* Courses Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Courses and Certifications
          </h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Full Stack Web Development - FreeCodeCamp</li>
            <li>Advanced JavaScript </li>
            <li>React - The Complete Guide </li>
            <li>Node.js and Express </li>
          </ul>
        </section>

        {/* Tools and Frameworks Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Tools and Frameworks
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-700">
            <li>VS Code</li>
            <li>Postman</li>
            <li>Git & GitHub</li>
            <li>Webpack</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Figma</li>
            <li>Heroku</li>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Firebase</li>
            <li>Render</li>
            <li></li>
          </ul>
        </section>

        {/* Experience Section (Optional) */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            Experience
          </h2>
          <ul className="text-gray-700 space-y-4">
            <li>
              <h3 className="text-lg font-semibold">Full Stack Developer</h3>
              <p className="text-sm text-gray-600">
                Academic Courses | Jan 2021 - Present
              </p>
              <ul className="list-disc list-inside">
                <li>
                  Developed and maintained responsive web applications using
                  React and Node.js.
                </li>
                <li>
                  Integrated RESTful APIs for seamless data communication.
                </li>
                <li>
                  Deployed scalable microservices on Digital Ocean using APACHE
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Resume;
