import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, MapPin, Mail, Phone, Linkedin, BarChart3, TrendingUp, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/vidhyabathi k  cv final.pdf';
    link.download = 'Vidhyabathi_K_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 md:pt-12" style={{ perspective: '1200px' }}>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-12">
        
        {/* Text Content */}
        <div className="order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 20, rotateX: 15 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              rotateX: 0,
              rotateY: mousePosition.x * 0.1,
            }}
            transition={{ duration: 0.8, type: "spring" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h2 className="text-neon-cyan font-medium tracking-wider mb-4 uppercase text-sm md:text-base">
              Hello, I'm
            </h2>
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {PERSONAL_INFO.name}
            </h1>
            <h3 className={`text-lg sm:text-xl md:text-2xl mb-4 md:mb-6 font-light ${
              theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
            }`}>
              {PERSONAL_INFO.title}
            </h3>
            <p className={`text-base sm:text-lg mb-6 md:mb-8 border-l-4 border-neon-purple pl-3 md:pl-4 max-w-lg ${
              theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
            }`}>
              {PERSONAL_INFO.tagline}
            </p>

            {/* Contact Details Small */}
            <div className={`flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-4 mb-6 md:mb-8 text-xs sm:text-sm ${
              theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
            }`}>
              <span className="flex items-center gap-2"><MapPin size={14} className="sm:w-4 sm:h-4 text-neon-teal"/> <span className="break-words">{PERSONAL_INFO.location}</span></span>
              <span className="flex items-center gap-2"><Mail size={14} className="sm:w-4 sm:h-4 text-neon-teal"/> <span className="break-all">{PERSONAL_INFO.email}</span></span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
              <motion.a 
                href="#projects" 
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  rotateX: [0, -10, 0],
                  rotateY: [0, 5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ 
                  transformStyle: 'preserve-3d',
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite',
                }}
                className="premium-link ripple-effect relative px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-neon-purple via-indigo-600 to-neon-cyan text-white rounded-full font-medium flex items-center justify-center gap-2 group overflow-hidden glow-on-hover text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Eye size={18} />
                  </motion.div>
                  View Projects
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan via-neon-purple to-neon-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </motion.a>
              <motion.button 
                onClick={handleDownloadResume}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  rotateX: [0, -10, 0],
                  rotateY: [0, -5, 0],
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                style={{ transformStyle: 'preserve-3d' }}
                className={`premium-link ripple-effect px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium flex items-center justify-center gap-2 relative overflow-hidden glow-on-hover text-sm sm:text-base ${
                  theme === 'dark'
                    ? 'bg-white/5 border border-white/10 text-white hover:bg-white/10'
                    : 'bg-gray-100 border border-gray-200 text-gray-900 hover:bg-gray-200'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Download size={18} />
                  </motion.div>
                  Download Resume
                </span>
              </motion.button>
            </div>
            
             {/* Socials */}
             <div className="mt-8 flex gap-6">
                <motion.a 
                  href={PERSONAL_INFO.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className={`premium-link magnetic-hover p-3 rounded-full transition-all relative group ${
                    theme === 'dark' 
                      ? 'text-slate-400 hover:text-neon-cyan bg-white/5 hover:bg-white/10' 
                      : 'text-gray-500 hover:text-blue-600 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Linkedin size={24} className="relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                </motion.a>
                <motion.a 
                  href={`tel:${PERSONAL_INFO.phone}`} 
                  whileHover={{ scale: 1.2, rotate: [0, 10, -10, 10, 0] }}
                  whileTap={{ scale: 0.9 }}
                  className={`premium-link magnetic-hover p-3 rounded-full transition-all relative group ${
                    theme === 'dark' 
                      ? 'text-slate-400 hover:text-neon-teal bg-white/5 hover:bg-white/10' 
                      : 'text-gray-500 hover:text-green-600 bg-gray-100 hover:bg-gray-200'
                  }`}
                >
                  <Phone size={24} className="relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-teal to-neon-cyan opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-neon-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                </motion.a>
             </div>
          </motion.div>
        </div>

        {/* Image / Graphic */}
        <div className="order-1 md:order-2 flex justify-center relative">
          {/* Floating Data Icons around profile */}
          <motion.div
            className="absolute top-4 right-4 sm:top-10 sm:right-10 z-20 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotateY: -90 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.2, 1],
              rotateY: [0, 360],
              rotateX: [0, 15, 0],
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity },
              scale: { duration: 4, repeat: Infinity },
              rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <BarChart3 
              size={32} 
              className={theme === 'dark' ? 'text-neon-cyan' : 'text-blue-600'}
              style={{ filter: 'drop-shadow(0 0 8px rgba(6, 182, 212, 0.6))' }}
            />
          </motion.div>
          
          <motion.div
            className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 z-20 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotateY: 90 }}
            animate={{ 
              opacity: [0.6, 0.9, 0.6],
              scale: [1, 1.2, 1],
              rotateY: [360, 0],
              rotateX: [0, -15, 0],
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay: 1 },
              scale: { duration: 4, repeat: Infinity, delay: 1 },
              rotateY: { duration: 18, repeat: Infinity, ease: "linear", delay: 1 },
              rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <TrendingUp 
              size={28} 
              className={theme === 'dark' ? 'text-neon-purple' : 'text-purple-600'}
              style={{ filter: 'drop-shadow(0 0 8px rgba(139, 92, 246, 0.6))' }}
            />
          </motion.div>
          
          <motion.div
            className="absolute top-1/2 -left-6 sm:-left-8 z-20 hidden sm:block"
            initial={{ opacity: 0, scale: 0, rotateX: -90 }}
            animate={{ 
              opacity: [0.5, 0.8, 0.5],
              scale: [1, 1.15, 1],
              rotateZ: [0, 360],
              rotateY: [0, 20, 0],
            }}
            transition={{
              opacity: { duration: 3, repeat: Infinity, delay: 2 },
              scale: { duration: 4, repeat: Infinity, delay: 2 },
              rotateZ: { duration: 15, repeat: Infinity, ease: "linear", delay: 2 },
              rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Database 
              size={24} 
              className={theme === 'dark' ? 'text-neon-teal' : 'text-teal-600'}
              style={{ filter: 'drop-shadow(0 0 8px rgba(20, 184, 166, 0.6))' }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -45 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotateY: 0,
              rotateX: mousePosition.y * 0.3,
              rotateZ: mousePosition.x * 0.2,
            }}
            transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
            whileHover={{ 
              rotateY: [0, 3, -3, 0],
              rotateX: [0, 3, -3, 0],
              scale: 1.03,
              transition: { duration: 0.5 }
            }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-96 md:h-[420px] mx-auto"
          >
            {/* Decorative Rectangular Frames with 3D Effect - Data Card Style */}
            <motion.div 
              className="absolute inset-0 border-2 border-neon-teal/30 rounded-3xl"
              animate={{ 
                rotateY: [0, 360],
                rotateX: [0, 8, 0],
                scale: [1, 1.04, 1],
              }}
              transition={{ 
                rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div 
              className="absolute inset-2 border-2 border-neon-purple/30 rounded-3xl"
              animate={{ 
                rotateY: [360, 0],
                rotateX: [0, -8, 0],
                scale: [1, 1.03, 1],
              }}
              transition={{ 
                rotateY: { duration: 20, repeat: Infinity, ease: "linear" },
                rotateX: { duration: 12, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            <motion.div 
              className="absolute inset-4 border-2 border-neon-cyan/25 rounded-2xl"
              animate={{ 
                rotateZ: [0, 360],
                scale: [1, 1.02, 1],
              }}
              transition={{ 
                rotateZ: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 7, repeat: Infinity, ease: "easeInOut" }
              }}
              style={{ transformStyle: 'preserve-3d' }}
            />
            {/* Corner accent lines for data card aesthetic */}
            <motion.div 
              className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-neon-cyan/40 rounded-tl-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-neon-purple/40 rounded-tr-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-neon-teal/40 rounded-bl-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-neon-cyan/40 rounded-br-3xl"
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            />
            
            {/* Image Container with 3D Effect - Rounded Rectangle */}
            <motion.div 
              className={`absolute inset-8 rounded-3xl overflow-hidden border-4 shadow-2xl ${
                theme === 'dark' 
                  ? 'border-white/10 bg-navy-800' 
                  : 'border-gray-200 bg-white'
              }`}
              whileHover={{ 
                boxShadow: theme === 'dark' 
                  ? '0 0 40px rgba(6, 182, 212, 0.5), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 80px rgba(20, 184, 166, 0.2)'
                  : '0 0 30px rgba(6, 182, 212, 0.4), 0 0 50px rgba(139, 92, 246, 0.2), 0 0 70px rgba(20, 184, 166, 0.15)'
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                boxShadow: theme === 'dark'
                  ? '0 0 20px rgba(6, 182, 212, 0.3), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(20, 184, 166, 0.1)'
                  : '0 0 15px rgba(6, 182, 212, 0.2), 0 0 30px rgba(139, 92, 246, 0.1), 0 0 50px rgba(20, 184, 166, 0.08)'
              }}
            >
                <motion.img 
                    src={PERSONAL_INFO.profileImage} 
                    alt={PERSONAL_INFO.name} 
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center 20%' }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.3 }}
                />
                {/* Corner accent decorations */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-neon-cyan/50 rounded-tl-lg"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-neon-purple/50 rounded-tr-lg"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-neon-teal/50 rounded-bl-lg"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-neon-cyan/50 rounded-br-lg"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;