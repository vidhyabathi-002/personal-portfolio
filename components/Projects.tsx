import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Folder, BarChart3, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Projects: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="projects" className={`py-12 sm:py-16 md:py-20 relative ${
      theme === 'dark' ? 'bg-navy-800/30' : 'bg-gray-100'
    }`} style={{ perspective: '1200px' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center relative"
        >
          {/* Data-themed decorative icons */}
          <motion.div
            className="absolute -top-8 left-1/4 opacity-20"
            animate={{
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <BarChart3 size={40} className={theme === 'dark' ? 'text-neon-cyan' : 'text-blue-600'} />
          </motion.div>
          
          <motion.div
            className="absolute -top-8 right-1/4 opacity-20"
            animate={{
              rotateY: [360, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              rotateY: { duration: 18, repeat: Infinity, ease: "linear" },
              scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <TrendingUp size={40} className={theme === 'dark' ? 'text-neon-purple' : 'text-purple-600'} />
          </motion.div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-pink-500 mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
              A selection of my work in Data Science, Computer Vision, and Web Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ 
                  y: -12, 
                  scale: 1.03,
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 5, 0],
                  transition: { duration: 0.5 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`premium-link group relative rounded-2xl border hover:border-neon-teal/50 overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hologram-card ${
                  theme === 'dark' 
                    ? 'bg-navy-900 border-white/10' 
                    : 'bg-white border-gray-200'
                }`}
            >
              {/* Top Gradient Line */}
              <motion.div 
                className="h-1 w-full bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-teal opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  backgroundSize: '200% 100%',
                  animation: 'gradient 3s ease infinite',
                }}
              />
              {/* Glow Effect on Hover */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-purple/0 to-neon-teal/0 group-hover:from-neon-cyan/10 group-hover:via-neon-purple/10 group-hover:to-neon-teal/10 transition-all duration-500 blur-2xl pointer-events-none"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              ></motion.div>
              
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl text-neon-teal ${
                      theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                    }`}>
                        <Folder size={24} />
                    </div>
                    <div className="flex gap-2">
                        {project.github !== '#' && (
                            <motion.a 
                              href={project.github} 
                              target="_blank" 
                              rel="noreferrer" 
                              whileHover={{ scale: 1.3, rotate: [0, -10, 10, -10, 0] }}
                              whileTap={{ scale: 0.9 }}
                              className={`premium-link magnetic-hover p-2 rounded-lg transition-all relative group ${
                                theme === 'dark' 
                                  ? 'text-slate-400 hover:text-white bg-white/5 hover:bg-white/10' 
                                  : 'text-gray-500 hover:text-gray-900 bg-gray-100 hover:bg-gray-200'
                              }`}
                            >
                              <Github size={20} className="relative z-10" />
                              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                              <div className="absolute inset-0 rounded-lg border border-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                            </motion.a>
                        )}
                    </div>
                </div>

                <h3 className={`text-lg sm:text-xl font-bold mb-2 group-hover:text-neon-cyan transition-colors ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                    {project.title}
                </h3>
                
                <p className={`text-xs sm:text-sm mb-3 md:mb-4 line-clamp-2 ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                        <span key={i} className={`text-xs px-2 py-1 rounded border ${
                          theme === 'dark' 
                            ? 'bg-navy-800 border-white/10 text-slate-300' 
                            : 'bg-gray-100 border-gray-200 text-gray-700'
                        }`}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* Hover Reveal Points - Simple implementation using absolute positioning overlay or just expanding */}
                <ul className={`text-xs list-disc list-inside space-y-1 opacity-60 group-hover:opacity-100 transition-opacity ${
                  theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
                }`}>
                    {project.points.slice(0, 2).map((p, i) => (
                        <li key={i} className="line-clamp-1">{p}</li>
                    ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;