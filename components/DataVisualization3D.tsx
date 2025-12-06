import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { BarChart3, TrendingUp, PieChart, Activity, Database, Network } from 'lucide-react';

const DataVisualization3D: React.FC = () => {
  const { theme } = useTheme();

  // 3D Bar Chart Component
  const BarChart3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0, rotateY: -90 }}
      animate={{ 
        opacity: theme === 'dark' ? [0.3, 0.6, 0.3] : [0.4, 0.7, 0.4],
        scale: [1, 1.2, 1],
        rotateY: [0, 360],
        rotateX: [0, 15, 0],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        scale: { duration: 4, repeat: Infinity, delay },
        rotateY: { duration: 20, repeat: Infinity, ease: "linear", delay },
        rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <div className="relative" style={{ transformStyle: 'preserve-3d' }}>
        {/* Bar Chart Bars */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${i * 12}px`,
              bottom: 0,
              width: '8px',
              height: `${20 + i * 15}px`,
              background: `linear-gradient(to top, ${
                theme === 'dark' 
                  ? ['#06b6d4', '#8b5cf6', '#14b8a6', '#ec4899'][i]
                  : ['#0891b2', '#7c3aed', '#0d9488', '#2563eb'][i]
              } ${theme === 'dark' ? '80' : '90'}, transparent)`,
              boxShadow: theme === 'dark' 
                ? `0 0 8px ${['#06b6d4', '#8b5cf6', '#14b8a6', '#ec4899'][i]}40`
                : `0 0 6px ${['#0891b2', '#7c3aed', '#0d9488', '#2563eb'][i]}30`,
              borderRadius: '4px 4px 0 0',
              transform: `translateZ(${i * 5}px)`,
            }}
            animate={{
              height: [`${20 + i * 15}px`, `${30 + i * 20}px`, `${20 + i * 15}px`],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: delay + i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  // 3D Pie Chart Component
  const PieChart3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '60px',
        height: '60px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0, rotateZ: -180 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
        scale: [1, 1.1, 1],
        rotateZ: [0, 360],
        rotateY: [0, 15, 0],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        scale: { duration: 4, repeat: Infinity, delay },
        rotateZ: { duration: 15, repeat: Infinity, ease: "linear", delay },
        rotateY: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60" style={{ transformStyle: 'preserve-3d' }}>
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke={theme === 'dark' ? '#06b6d4' : '#0891b2'}
          strokeWidth={theme === 'dark' ? "3" : "3.5"}
          strokeLinecap="round"
          strokeDasharray="39.27 39.27"
          strokeDashoffset="0"
          animate={{
            strokeDashoffset: [0, 39.27, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke={theme === 'dark' ? '#8b5cf6' : '#7c3aed'}
          strokeWidth={theme === 'dark' ? "3" : "3.5"}
          strokeLinecap="round"
          strokeDasharray="39.27 39.27"
          strokeDashoffset="19.63"
          animate={{
            strokeDashoffset: [19.63, 39.27, 19.63],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="30"
          cy="30"
          r="25"
          fill="none"
          stroke={theme === 'dark' ? '#14b8a6' : '#0d9488'}
          strokeWidth={theme === 'dark' ? "3" : "3.5"}
          strokeLinecap="round"
          strokeDasharray="39.27 39.27"
          strokeDashoffset="29.45"
          animate={{
            strokeDashoffset: [29.45, 39.27, 29.45],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </svg>
    </motion.div>
  );

  // 3D Line Graph Component
  const LineGraph3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '80px',
        height: '50px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        scale: [1, 1.15, 1],
        rotateY: [0, 360],
        rotateX: [0, 10, 0],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        scale: { duration: 4, repeat: Infinity, delay },
        rotateY: { duration: 18, repeat: Infinity, ease: "linear", delay },
        rotateX: { duration: 7, repeat: Infinity, ease: "easeInOut", delay },
      }}
    >
      <svg width="80" height="50" viewBox="0 0 80 50" style={{ transformStyle: 'preserve-3d' }}>
        <motion.polyline
          points="10,40 20,30 30,20 40,25 50,15 60,20 70,10"
          fill="none"
          stroke={theme === 'dark' ? '#06b6d4' : '#0891b2'}
          strokeWidth={theme === 'dark' ? "2" : "2.5"}
          strokeLinecap="round"
          animate={{
            pathLength: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {[10, 20, 30, 40, 50, 60, 70].map((xPos, i) => (
          <motion.circle
            key={i}
            cx={xPos}
            cy={[40, 30, 20, 25, 15, 20, 10][i]}
            r={theme === 'dark' ? "3" : "3.5"}
            fill={theme === 'dark' ? '#8b5cf6' : '#7c3aed'}
            stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'}
            strokeWidth="0.5"
            animate={{
              scale: [1, 1.6, 1],
              opacity: theme === 'dark' ? [0.5, 1, 0.5] : [0.6, 1, 0.6],
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

  // Data Network Nodes
  const DataNetwork = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
    const nodes = [
      { x: 0, y: 0 },
      { x: 30, y: -20 },
      { x: -30, y: -20 },
      { x: 20, y: 20 },
      { x: -20, y: 20 },
    ];

    return (
      <motion.div
        className="absolute"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: '100px',
          height: '100px',
          transformStyle: 'preserve-3d',
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
          rotateZ: [0, 360],
        }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, delay },
          scale: { duration: 5, repeat: Infinity, delay },
          rotateZ: { duration: 25, repeat: Infinity, ease: "linear", delay },
        }}
      >
        <svg width="100" height="100" viewBox="-50 -50 100 100">
          {/* Connections */}
          {nodes.map((node, i) =>
            nodes.slice(i + 1).map((otherNode, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={otherNode.x}
                y2={otherNode.y}
                stroke={theme === 'dark' ? 'rgba(6, 182, 212, 0.3)' : 'rgba(6, 182, 212, 0.4)'}
                strokeWidth="1"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: (i + j) * 0.2,
                }}
              />
            ))
          )}
          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="4"
              fill={theme === 'dark' 
                ? ['#06b6d4', '#8b5cf6', '#14b8a6', '#ec4899', '#f59e0b'][i]
                : ['#06b6d4', '#8b5cf6', '#14b8a6', '#3b82f6', '#10b981'][i]
              }
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </svg>
      </motion.div>
    );
  };

  // Database Icon 3D
  const Database3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0, scale: 0, rotateX: -90 }}
      animate={{ 
        opacity: [0.4, 0.7, 0.4],
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
      <Database 
        size={40} 
        className={theme === 'dark' ? 'text-neon-cyan' : 'text-blue-600'}
        style={{ filter: 'drop-shadow(0 0 10px rgba(6, 182, 212, 0.5))' }}
      />
    </motion.div>
  );

  // Data Points Scatter
  const DataPoints = ({ x, y, delay }: { x: number; y: number; delay: number }) => (
    <motion.div
      className="absolute"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: '60px',
        height: '60px',
        transformStyle: 'preserve-3d',
      }}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3],
        rotateZ: [0, 360],
      }}
      transition={{
        opacity: { duration: 3, repeat: Infinity, delay },
        rotateZ: { duration: 15, repeat: Infinity, ease: "linear", delay },
      }}
    >
      <svg width="60" height="60" viewBox="0 0 60 60">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * (Math.PI / 180);
          const radius = 20;
          const pointX = 30 + Math.cos(angle) * radius;
          const pointY = 30 + Math.sin(angle) * radius;
          
          return (
            <motion.circle
              key={i}
              cx={pointX}
              cy={pointY}
              r="3"
              fill={theme === 'dark' 
                ? ['#06b6d4', '#8b5cf6', '#14b8a6'][i % 3]
                : ['#06b6d4', '#8b5cf6', '#14b8a6'][i % 3]
              }
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.15,
              }}
            />
          );
        })}
      </svg>
    </motion.div>
  );

  // Heat Map Visualization
  const HeatMap3D = ({ x, y, delay }: { x: number; y: number; delay: number }) => {
    const gridSize = 4;
    const cellSize = 12;
    
    return (
      <motion.div
        className="absolute"
        style={{
          left: `${x}%`,
          top: `${y}%`,
          width: `${gridSize * cellSize}px`,
          height: `${gridSize * cellSize}px`,
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
          rotateY: { duration: 22, repeat: Infinity, ease: "linear", delay },
        }}
      >
        <svg width={gridSize * cellSize} height={gridSize * cellSize} viewBox={`0 0 ${gridSize * cellSize} ${gridSize * cellSize}`}>
          {Array.from({ length: gridSize * gridSize }).map((_, i) => {
            const row = Math.floor(i / gridSize);
            const col = i % gridSize;
            const intensity = Math.sin(i * 0.5) * 0.5 + 0.5;
            
            return (
              <motion.rect
                key={i}
                x={col * cellSize}
                y={row * cellSize}
                width={cellSize - 1}
                height={cellSize - 1}
                fill={theme === 'dark' 
                  ? `rgba(6, 182, 212, ${0.3 + intensity * 0.4})`
                  : `rgba(8, 145, 178, ${0.4 + intensity * 0.4})`
                }
                stroke={theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'}
                strokeWidth="0.5"
                animate={{
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            );
          })}
        </svg>
      </motion.div>
    );
  };

  const dataElements = [
    { type: 'bar', x: 10, y: 20, delay: 0 },
    { type: 'pie', x: 85, y: 15, delay: 0.5 },
    { type: 'line', x: 15, y: 80, delay: 1 },
    { type: 'network', x: 80, y: 75, delay: 1.5 },
    { type: 'database', x: 50, y: 10, delay: 2 },
    { type: 'points', x: 45, y: 85, delay: 2.5 },
    { type: 'bar', x: 70, y: 40, delay: 3 },
    { type: 'line', x: 25, y: 50, delay: 3.5 },
    { type: 'pie', x: 90, y: 60, delay: 4 },
    { type: 'network', x: 5, y: 60, delay: 4.5 },
    { type: 'heatmap', x: 55, y: 35, delay: 5 },
    { type: 'heatmap', x: 30, y: 75, delay: 5.5 },
  ];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {dataElements.map((element, idx) => {
        switch (element.type) {
          case 'bar':
            return <BarChart3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'pie':
            return <PieChart3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'line':
            return <LineGraph3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'network':
            return <DataNetwork key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'database':
            return <Database3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'points':
            return <DataPoints key={idx} x={element.x} y={element.y} delay={element.delay} />;
          case 'heatmap':
            return <HeatMap3D key={idx} x={element.x} y={element.y} delay={element.delay} />;
          default:
            return null;
        }
      })}
    </div>
  );
};

export default DataVisualization3D;

