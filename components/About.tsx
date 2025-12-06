import React from 'react';
import { motion } from 'framer-motion';
import { ABOUT_TEXT, EDUCATION } from '../constants';
import { GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="about" className={`py-12 sm:py-16 md:py-20 relative ${
      theme === 'dark' ? 'bg-navy-900' : 'bg-white'
    }`} style={{ perspective: '1200px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -20, rotateY: -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              rotateY: [0, 5, -5, 0],
              rotateX: [0, 3, 0],
              y: -5,
              transition: { duration: 0.5 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className={`backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <p className={`text-base sm:text-lg leading-relaxed whitespace-pre-line ${
              theme === 'dark' ? 'text-slate-300' : 'text-gray-600'
            }`}>
              {ABOUT_TEXT}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }}
                  className={`p-3 md:p-4 rounded-lg border text-center relative overflow-hidden group ${
                    theme === 'dark' 
                      ? 'bg-navy-800 border-white/5' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-teal/0 via-neon-teal/10 to-neon-teal/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="block text-2xl sm:text-3xl font-bold text-neon-teal mb-1 relative z-10">10+</span>
                  <span className={`text-xs uppercase tracking-wide relative z-10 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`}>Projects</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }}
                  className={`p-3 md:p-4 rounded-lg border text-center relative overflow-hidden group ${
                    theme === 'dark' 
                      ? 'bg-navy-800 border-white/5' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-purple/10 to-neon-purple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="block text-2xl sm:text-3xl font-bold text-neon-purple mb-1 relative z-10">20+</span>
                  <span className={`text-xs uppercase tracking-wide relative z-10 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`}>Certifications</span>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }}
                  className={`p-3 md:p-4 rounded-lg border text-center relative overflow-hidden group ${
                    theme === 'dark' 
                      ? 'bg-navy-800 border-white/5' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="block text-2xl sm:text-3xl font-bold text-neon-cyan mb-1 relative z-10">10+</span>
                  <span className={`text-xs uppercase tracking-wide relative z-10 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`}>Workshops</span>
                </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16"
          >
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-display font-semibold mb-6 md:mb-8 flex items-center gap-2 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              <GraduationCap className="text-neon-cyan" size={24}/> Education
            </h3>
            <div className="space-y-4 md:space-y-6">
              {EDUCATION.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className={`group relative p-4 sm:p-5 md:p-6 rounded-xl border hover:border-neon-teal/50 transition-all duration-300 overflow-hidden ${
                    theme === 'dark' 
                      ? 'bg-navy-800 border-white/5' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-neon-teal to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <h4 className={`text-base sm:text-lg font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>{edu.degree}</h4>
                  <p className="text-neon-cyan font-medium text-xs sm:text-sm mb-2">{edu.school}</p>
                  <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 text-xs sm:text-sm mt-2 ${
                    theme === 'dark' ? 'text-slate-400' : 'text-gray-500'
                  }`}>
                    <span>{edu.year}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      theme === 'dark' 
                        ? 'bg-white/10 text-white' 
                        : 'bg-gray-100 text-gray-900'
                    }`}>{edu.score}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;