import React from 'react';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Workshops from './components/Workshops';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

const AppContent: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 relative ${
      theme === 'dark' 
        ? 'text-white selection:bg-neon-teal selection:text-navy-900' 
        : 'text-gray-900 selection:bg-blue-200 selection:text-blue-900'
    }`} style={{ perspective: '1000px' }}>
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Workshops />
      <Contact />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;