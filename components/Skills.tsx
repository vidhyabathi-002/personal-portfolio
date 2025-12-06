import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS, ICONS_MAP } from '../constants';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { useTheme } from '../contexts/ThemeContext';

const data = [
  { subject: 'Python', A: 90, fullMark: 100 },
  { subject: 'SQL', A: 85, fullMark: 100 },
  { subject: 'ML', A: 80, fullMark: 100 },
  { subject: 'CV', A: 75, fullMark: 100 },
  { subject: 'Viz', A: 85, fullMark: 100 },
  { subject: 'Cloud', A: 60, fullMark: 100 },
];

const Skills: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section id="skills" className={`py-12 sm:py-16 md:py-20 overflow-hidden ${
      theme === 'dark' ? 'bg-navy-900' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
            
            {/* Left: Skill Cards */}
            <div className="flex-1">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8 md:mb-12"
                >
                    <h2 className={`text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-4 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Skills & Tools</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-neon-cyan to-neon-teal rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    {SKILLS.map((skillGroup, idx) => {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        const Icon = (ICONS_MAP as any)[skillGroup.category] || ICONS_MAP.Programming;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ 
                                  y: -8, 
                                  scale: 1.03,
                                  rotateY: [0, 8, -8, 0],
                                  rotateX: [0, 5, 0],
                                  transition: { duration: 0.4 }
                                }}
                                style={{ transformStyle: 'preserve-3d' }}
                                className={`premium-link p-5 rounded-xl border hover:border-neon-teal/30 hover:shadow-lg hover:shadow-neon-teal/10 transition-all group relative overflow-hidden ${
                                  theme === 'dark' 
                                    ? 'bg-navy-800 border-white/5' 
                                    : 'bg-gray-50 border-gray-200'
                                }`}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 to-neon-teal/0 group-hover:from-neon-cyan/10 group-hover:to-neon-teal/10 transition-all duration-500 blur-xl pointer-events-none"></div>
                                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                                    <div className={`p-1.5 sm:p-2 rounded-lg text-neon-cyan group-hover:text-white group-hover:bg-neon-cyan transition-colors ${
                                      theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                                    }`}>
                                        <Icon size={18} className="sm:w-5 sm:h-5" />
                                    </div>
                                    <h3 className={`font-bold text-sm sm:text-base ${
                                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>{skillGroup.category}</h3>
                                </div>
                                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                    {skillGroup.items.map((item, i) => (
                                        <span key={i} className={`text-xs font-medium px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border ${
                                          theme === 'dark' 
                                            ? 'bg-navy-900 text-slate-400 border-white/5' 
                                            : 'bg-white text-gray-600 border-gray-200'
                                        }`}>
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Right: Visualization */}
            <div className="flex-1 flex flex-col items-center justify-center">
                 <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className={`w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-3xl border backdrop-blur-sm relative ${
                      theme === 'dark' 
                        ? 'bg-navy-800/30 border-white/5' 
                        : 'bg-gray-50 border-gray-200'
                    }`}
                 >
                    <div className={`absolute top-4 left-6 text-sm font-display ${
                      theme === 'dark' ? 'text-slate-500' : 'text-gray-500'
                    }`}>Competency Radar</div>
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                        <PolarGrid stroke={theme === 'dark' ? '#334155' : '#e2e8f0'} />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: theme === 'dark' ? '#94a3b8' : '#64748b', fontSize: 12 }} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar
                            name="Skill Level"
                            dataKey="A"
                            stroke="#06b6d4"
                            strokeWidth={2}
                            fill="#06b6d4"
                            fillOpacity={0.3}
                        />
                        </RadarChart>
                    </ResponsiveContainer>
                 </motion.div>
                 
                 {/* Additional Soft Skills Pills */}
                 <div className="mt-8 flex flex-wrap gap-4 justify-center">
                    {["Problem Solving", "Analytical Thinking", "Agile", "Communication"].map((s, i) => (
                        <div key={i} className="px-4 py-2 rounded-full border border-neon-purple/30 text-neon-purple text-sm bg-neon-purple/5">
                            {s}
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;