import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/Router';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <header className="shadow-md bg-white">
          <Navbar />
        </header>

        {/* Main Content */}
        <main className="flex-grow">
          <AppRouter /> {/* Routes are now handled by AppRouter */}
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
