import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { Brain, Network, Cpu, Zap, Sparkles } from 'lucide-react';

const AI3DObjects: React.FC = () => {
  const { theme } = useTheme();

  // Neural Network 3D Component
  const NeuralNetwork3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
    const layers = [3, 4, 3]; // Input, Hidden, Output
    const nodeSpacing = 25;
    
    return (
      <motion.div
        className="absolute"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: '120px',
          height: '100px',
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: theme === 'dark' ? [0.4, 0.7, 0.4] : [0.5, 0.8, 0.5],
          scale: [1, 1.1, 1],
          rotateY: [0, 360],
        }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, delay },
          scale: { duration: 5, repeat: Infinity, delay },
          rotateY: { duration: 25, repeat: Infinity, ease: "linear", delay },
        }}
      >
        <svg width="120" height="100" viewBox="0 0 120 100">
          {/* Connections between layers */}
          {layers.map((layerNodes, layerIdx) => {
            if (layerIdx === layers.length - 1) return null;
            const nextLayerNodes = layers[layerIdx + 1];
            const startX = 20 + layerIdx * 40;
            const nextX = 20 + (layerIdx + 1) * 40;
            
            return Array.from({ length: layerNodes }).map((_, nodeIdx) => {
              const startY = 20 + (nodeIdx * nodeSpacing);
              return Array.from({ length: nextLayerNodes }).map((_, nextNodeIdx) => {
                const endY = 20 + (nextNodeIdx * nodeSpacing);
                return (
                  <motion.line
                    key={`${layerIdx}-${nodeIdx}-${nextNodeIdx}`}
                    x1={startX}
                    y1={startY}
                    x2={nextX}
                    y2={endY}
                    stroke={theme === 'dark' 
                      ? ['rgba(6, 182, 212, 0.4)', 'rgba(139, 92, 246, 0.4)', 'rgba(20, 184, 166, 0.4)'][layerIdx % 3]
                      : ['rgba(6, 182, 212, 0.5)', 'rgba(139, 92, 246, 0.5)', 'rgba(20, 184, 166, 0.5)'][layerIdx % 3]
                    }
                    strokeWidth={theme === 'dark' ? "1.5" : "2"}
                    strokeLinecap="round"
                    animate={{
                      opacity: theme === 'dark' ? [0.3, 0.6, 0.3] : [0.4, 0.7, 0.4],
                      pathLength: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (nodeIdx + nextNodeIdx) * 0.1,
                    }}
                  />
                );
              });
            });
          })}
          
          {/* Nodes */}
          {layers.map((layerNodes, layerIdx) => {
            const xPos = 20 + layerIdx * 40;
            return Array.from({ length: layerNodes }).map((_, nodeIdx) => {
              const yPos = 20 + (nodeIdx * nodeSpacing);
              return (
                <motion.circle
                  key={`node-${layerIdx}-${nodeIdx}`}
                  cx={xPos}
                  cy={yPos}
                  r="5"
                  fill={theme === 'dark' 
                    ? ['#06b6d4', '#8b5cf6', '#14b8a6'][layerIdx % 3]
                    : ['#0891b2', '#7c3aed', '#0d9488'][layerIdx % 3]
                  }
                  stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}
                  strokeWidth="0.5"
                  animate={{
                    scale: [1, 1.6, 1],
                    opacity: theme === 'dark' ? [0.6, 1, 0.6] : [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: (layerIdx + nodeIdx) * 0.3,
                  }}
                />
              );
            });
          })}
        </svg>
      </motion.div>
    );
  };

  // AI Brain Icon 3D
  const Brain3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0, rotateX: -90 }}
      animate={{ 
        opacity: theme === 'dark' ? [0.5, 0.8, 0.5] : [0.6, 0.9, 0.6],
        scale: [1, 1.2, 1],
        rotateY: [0, 360],
        rotateX: [0, 20, 0],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        scale: { duration: 4, repeat: Infinity, delay },
        rotateY: { duration: 20, repeat: Infinity, ease: "linear", delay },
        rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Brain 
        size={36} 
        className={theme === 'dark' ? 'text-neon-purple' : 'text-purple-600'}
        style={{ 
          filter: theme === 'dark' 
            ? 'drop-shadow(0 0 12px rgba(139, 92, 246, 0.6)) drop-shadow(0 0 6px rgba(139, 92, 246, 0.4))'
            : 'drop-shadow(0 0 10px rgba(124, 58, 237, 0.5)) drop-shadow(0 0 5px rgba(124, 58, 237, 0.3))'
        }}
      />
    </motion.div>
  );

  // CPU/Processing Icon 3D
  const CPU3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.15, 1],
        rotateZ: [0, 360],
        rotateY: [0, 15, 0],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        scale: { duration: 4, repeat: Infinity, delay },
        rotateZ: { duration: 18, repeat: Infinity, ease: "linear", delay },
        rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <Cpu 
        size={32} 
        className={theme === 'dark' ? 'text-neon-cyan' : 'text-cyan-600'}
        style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.6))' }}
      />
    </motion.div>
  );

  // AI Sparkles/Stars
  const AISparkles = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '50px',
        height: '50px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: theme === 'dark' ? [0.3, 0.7, 0.3] : [0.4, 0.8, 0.4],
        rotateZ: [0, 360],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        rotateZ: { duration: 12, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <svg width="50" height="50" viewBox="0 0 50 50">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * (Math.PI / 180);
          const radius = 20;
          const xPos = 25 + Math.cos(angle) * radius;
          const yPos = 25 + Math.sin(angle) * radius;
          
          return (
            <motion.circle
              key={i}
              cx={xPos}
              cy={yPos}
              r="2"
              fill={theme === 'dark' 
                ? ['#06b6d4', '#8b5cf6', '#14b8a6', '#ec4899'][i % 4]
                : ['#0891b2', '#7c3aed', '#0d9488', '#2563eb'][i % 4]
              }
              stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}
              strokeWidth="0.5"
              animate={{
                scale: [1, 2.2, 1],
                opacity: theme === 'dark' ? [0.4, 1, 0.4] : [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
        <motion.circle
          cx="25"
          cy="25"
          r="3"
          fill={theme === 'dark' ? '#8b5cf6' : '#7c3aed'}
          stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)'}
          strokeWidth="1"
          animate={{
            scale: [1, 1.8, 1],
            opacity: theme === 'dark' ? [0.6, 1, 0.6] : [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </svg>
    </motion.div>
  );

  // AI Network Nodes
  const AINetwork = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '80px',
        height: '80px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.1, 1],
        rotateY: [0, 360],
      }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, delay },
        scale: { duration: 5, repeat: Infinity, delay },
        rotateY: { duration: 22, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <Network 
        size={40} 
        className={theme === 'dark' ? 'text-neon-teal' : 'text-teal-600'}
        style={{ filter: 'drop-shadow(0 0 10px rgba(20, 184, 166, 0.6))' }}
      />
    </motion.div>
  );

  // AI Circuit Pattern
  const AICircuit = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '70px',
        height: '70px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: theme === 'dark' ? [0.3, 0.6, 0.3] : [0.4, 0.7, 0.4],
        rotateZ: [0, 360],
      }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, delay },
        rotateZ: { duration: 20, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <svg width="70" height="70" viewBox="0 0 70 70">
        {/* Circuit lines */}
        <motion.path
          d="M10,35 L30,35 M40,20 L40,50 M50,35 L60,35"
          fill="none"
          stroke={theme === 'dark' ? '#06b6d4' : '#0891b2'}
          strokeWidth={theme === 'dark' ? "1.5" : "2"}
          strokeLinecap="round"
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Circuit nodes */}
        {[
          { x: 10, y: 35 },
          { x: 30, y: 35 },
          { x: 40, y: 20 },
          { x: 40, y: 50 },
          { x: 50, y: 35 },
          { x: 60, y: 35 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.x}
            cy={node.y}
            r={theme === 'dark' ? "2.5" : "3"}
            fill={theme === 'dark' ? '#8b5cf6' : '#7c3aed'}
            stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}
            strokeWidth="0.5"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );

  // AI Data Flow
  const AIDataFlow = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '90px',
        height: '60px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: theme === 'dark' ? [0.4, 0.7, 0.4] : [0.5, 0.8, 0.5],
        rotateY: [0, 360],
      }}
      transition={{
        opacity: { duration: 4, repeat: Infinity, delay },
        rotateY: { duration: 24, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <svg width="90" height="60" viewBox="0 0 90 60">
        {/* Data flow arrows */}
        {[0, 1, 2].map((i) => (
          <motion.path
            key={i}
            d={`M${10 + i * 30},30 L${25 + i * 30},30`}
            fill="none"
            stroke={theme === 'dark' 
              ? ['#06b6d4', '#8b5cf6', '#14b8a6'][i]
              : ['#0891b2', '#7c3aed', '#0d9488'][i]
            }
            strokeWidth={theme === 'dark' ? "2" : "2.5"}
            strokeLinecap="round"
            markerEnd="url(#arrowhead)"
            animate={{
              pathLength: [0, 1, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        <defs>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon
              points="0 0, 10 3, 0 6"
              fill={theme === 'dark' ? '#06b6d4' : '#0891b2'}
            />
          </marker>
        </defs>
      </svg>
    </motion.div>
  );

  const aiElements = [
    { type: 'neural', x: 8, y: 15, delay: 0 },
    { type: 'brain', x: 92, y: 25, delay: 0.5 },
    { type: 'cpu', x: 12, y: 70, delay: 1 },
    { type: 'sparkles', x: 88, y: 65, delay: 1.5 },
    { type: 'network', x: 50, y: 20, delay: 2 },
    { type: 'neural', x: 75, y: 40, delay: 2.5 },
    { type: 'brain', x: 25, y: 45, delay: 3 },
    { type: 'cpu', x: 60, y: 80, delay: 3.5 },
    { type: 'sparkles', x: 35, y: 25, delay: 4 },
    { type: 'network', x: 85, y: 85, delay: 4.5 },
    { type: 'circuit', x: 20, y: 30, delay: 5 },
    { type: 'dataflow', x: 70, y: 50, delay: 5.5 },
    { type: 'circuit', x: 45, y: 70, delay: 6 },
    { type: 'dataflow', x: 15, y: 55, delay: 6.5 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {aiElements.map((element, idx) => {
        switch (element.type) {
          case 'neural':
            return <NeuralNetwork3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'brain':
            return <Brain3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'cpu':
            return <CPU3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'sparkles':
            return <AISparkles key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'network':
            return <AINetwork key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'circuit':
            return <AICircuit key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'dataflow':
            return <AIDataFlow key={idx} x={element.x} y={element.y} delay={element.delay} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default AI3DObjects;

