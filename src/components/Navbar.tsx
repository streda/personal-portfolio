import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-bold text-blue-600">
        <Link to="/">My Portfolio</Link>
      </div>
      <div className="flex space-x-6">
        {/* <Link to="/" className="text-gray-700 hover:text-blue-600">
          Home
        </Link> */}
        <Link to="/about" className="text-gray-700 hover:text-blue-600">
          About
        </Link>
        <Link to="/projects" className="text-gray-700 hover:text-blue-600">
          Projects
        </Link>
        <Link to="/resume" className="text-gray-700 hover:text-blue-600">
          Resume
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-blue-600">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
