import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { Award, Medal } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Certifications: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="certifications" className={`py-12 sm:py-16 md:py-20 relative ${
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
            <Award size={40} className={theme === 'dark' ? 'text-neon-purple' : 'text-purple-600'} />
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
            <Medal size={40} className={theme === 'dark' ? 'text-neon-cyan' : 'text-cyan-600'} />
          </motion.div>

          <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-purple to-pink-500 mx-auto rounded-full"></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
          }`}>
              Professional certifications and credentials in Data Science, Analytics, and Cloud Technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
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
                    className={`premium-link group relative rounded-2xl border hover:border-neon-purple/50 overflow-hidden transition-all duration-300 flex flex-col cursor-pointer hologram-card ${
                      theme === 'dark' 
                        ? 'bg-navy-900 border-white/10' 
                        : 'bg-white border-gray-200'
                    }`}
                >
                  {/* Top Gradient Line */}
                  <motion.div 
                    className="h-1 w-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-teal opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'gradient 3s ease infinite',
                    }}
                  />
                  {/* Glow Effect on Hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-cyan/0 to-neon-teal/0 group-hover:from-neon-purple/10 group-hover:via-neon-cyan/10 group-hover:to-neon-teal/10 transition-all duration-500 blur-2xl pointer-events-none"
                    animate={{
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  
                  <div className="p-4 sm:p-5 md:p-6 flex-grow relative z-10">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                        <div className={`p-2 sm:p-3 rounded-xl text-neon-purple ${
                          theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                        }`}>
                            <Award size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <span className={`text-xs px-2 py-1 rounded border ${
                          theme === 'dark' 
                            ? 'bg-navy-800 border-white/10 text-slate-300' 
                            : 'bg-gray-100 border-gray-200 text-gray-700'
                        }`}>
                            {cert.year}
                        </span>
                    </div>

                    <h3 className={`text-base sm:text-lg md:text-xl font-bold mb-2 group-hover:text-neon-purple transition-colors ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                        {cert.name}
                    </h3>
                    
                    <p className={`text-xs sm:text-sm ${
                      theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                    }`}>
                        {cert.issuer}
                    </p>
                  </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;