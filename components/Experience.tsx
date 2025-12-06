import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Experience: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="experience" className={`py-12 sm:py-16 md:py-20 ${
      theme === 'dark' ? 'bg-navy-800/50' : 'bg-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 md:mb-16"
        >
          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan rounded-full"></div>
        </motion.div>

        <div className={`relative border-l-2 ml-3 sm:ml-4 md:ml-8 space-y-8 md:space-y-12 ${
          theme === 'dark' ? 'border-white/10' : 'border-gray-300'
        }`}>
          {EXPERIENCE.map((exp, idx) => (
            <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative pl-6 sm:pl-8 md:pl-12"
            >
              {/* Dot */}
              <div className={`absolute -left-[7px] sm:-left-[9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-2 border-neon-purple ${
                theme === 'dark' ? 'bg-navy-900' : 'bg-white'
              }`}></div>
              
              <motion.div 
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 3, 0],
                  transition: { duration: 0.5 }
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`premium-link p-4 sm:p-5 md:p-6 rounded-2xl border hover:border-opacity-50 transition-all shadow-xl relative overflow-hidden group ${
                  theme === 'dark' 
                    ? 'bg-navy-900 border-white/5 hover:border-white/20' 
                    : 'bg-white border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-cyan/0 to-neon-teal/0 group-hover:from-neon-purple/5 group-hover:via-neon-cyan/5 group-hover:to-neon-teal/5 transition-all duration-500 blur-xl pointer-events-none"></div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 md:mb-4 gap-2">
                    <div>
                        <h3 className={`text-lg sm:text-xl font-bold flex items-center gap-2 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}>
                             <Briefcase size={18} className="sm:w-5 sm:h-5 text-neon-purple"/> {exp.role}
                        </h3>
                        <p className="text-neon-cyan text-sm sm:text-base">{exp.company}</p>
                    </div>
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border w-fit ${
                      theme === 'dark' 
                        ? 'bg-white/5 text-slate-300 border-white/10' 
                        : 'bg-gray-100 text-gray-700 border-gray-200'
                    }`}>
                        {exp.period}
                    </span>
                </div>
                <ul className="space-y-1.5 sm:space-y-2">
                    {exp.description.map((point, pIdx) => (
                        <li key={pIdx} className={`text-xs sm:text-sm md:text-base flex items-start ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>
                            <span className="mr-2 text-neon-purple mt-1 sm:mt-1.5 flex-shrink-0">•</span>
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;