import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Lazy-load components for better performance
const About = lazy(() => import('../components/About'));
const Projects = lazy(() => import('../components/Projects'));
const Resume = lazy(() => import('../components/Resume'));
const Contact = lazy(() => import('../components/Contact'));

const AppRouter: React.FC = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Suspense>
);

export default AppRouter;
