import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Workshops', href: '#workshops' },
  { name: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={`fixed w-full z-50 top-0 left-0 backdrop-blur-md border-b transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-navy-900/80 border-white/10' 
        : 'bg-white/80 border-gray-200'
    }`} style={{ transformStyle: 'preserve-3d' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="premium-link text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-teal via-neon-cyan to-neon-purple relative"
              style={{
                backgroundSize: '200% 200%',
                animation: 'gradient 3s ease infinite',
              }}
            >
              VK.
            </motion.a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <div className="flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map((item, idx) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ 
                    y: -2, 
                    scale: 1.05,
                    rotateX: [0, -15, 0],
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: -20, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  style={{ transformStyle: 'preserve-3d' }}
                  className={`premium-link relative px-2 lg:px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-all duration-300 group ${
                    theme === 'dark'
                      ? 'text-slate-300 hover:text-neon-cyan'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">{item.name}</span>
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-300 group-hover:w-full`}></span>
                  <div className={`absolute inset-0 rounded-md bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
                </motion.a>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className={`premium-link p-2 rounded-md transition-all duration-300 relative overflow-hidden group ${
                theme === 'dark'
                  ? 'text-slate-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={theme === 'dark' ? { rotate: 0 } : { rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </motion.button>
          </div>
          
          <div className="flex items-center gap-2 md:hidden">
            {/* Mobile Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              className={`premium-link p-2 rounded-md transition-all duration-300 relative overflow-hidden group ${
                theme === 'dark'
                  ? 'text-slate-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              <motion.div
                animate={theme === 'dark' ? { rotate: 0 } : { rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`premium-link inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-all duration-300 relative overflow-hidden group ${
                theme === 'dark'
                  ? 'text-slate-400 hover:text-white hover:bg-white/10'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <motion.div
                animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden ${theme === 'dark' ? 'bg-navy-800' : 'bg-white'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                    theme === 'dark'
                      ? 'text-slate-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;