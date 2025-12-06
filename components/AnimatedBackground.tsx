import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import DataVisualization3D from './DataVisualization3D';
import AI3DObjects from './AI3DObjects';

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
    }> = [];

    const colors = theme === 'dark' 
      ? ['#06b6d4', '#8b5cf6', '#14b8a6', '#ec4899']
      : ['#06b6d4', '#8b5cf6', '#14b8a6', '#3b82f6'];

    // Create optimized data points particles (reduced for performance)
    const particleCount = window.innerWidth > 768 ? 45 : 30; // Less on mobile
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animationFrameId: number;
    let lastTime = performance.now();
    const targetFPS = 30; // Reduced from 60 for better performance
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime: number) => {
      if (currentTime - lastTime < frameInterval) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }
      lastTime = currentTime;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Calculate 3D position
        const scale = 200 / (200 + particle.z);
        const x2d = particle.x;
        const y2d = particle.y;
        const size2d = particle.size * scale;

        // Draw particle
        ctx.beginPath();
        ctx.arc(x2d, y2d, size2d, 0, Math.PI * 2);
        ctx.fillStyle = particle.color + Math.floor(scale * 100).toString(16).padStart(2, '0');
        ctx.fill();

          // Draw optimized data connections (reduced connections for performance)
          if (i % 2 === 0) { // Only connect every other particle
            particles.slice(i + 1).forEach((otherParticle) => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const dz = particle.z - otherParticle.z;
              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

              if (distance < 100) { // Reduced connection distance
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                const alpha = Math.floor((1 - distance / 100) * 35);
                ctx.strokeStyle = particle.color + alpha.toString(16).padStart(2, '0');
                ctx.lineWidth = 0.6;
                ctx.stroke();
              }
            });
          }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [theme]);

  return (
    <>
      {/* Enhanced Animated Gradient Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          background: theme === 'dark'
            ? 'linear-gradient(135deg, #0a0f1c 0%, #1a1f3a 20%, #0f172a 40%, #1e293b 60%, #0a0f1c 80%, #0f172a 100%)'
            : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 20%, #f1f5f9 40%, #e0e7ff 60%, #f8fafc 80%, #f1f5f9 100%)',
          backgroundSize: '400% 400%',
          animation: 'gradient 20s ease infinite',
        }}
      />
      
      {/* Additional subtle gradient overlay for depth */}
      <div 
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          background: theme === 'dark'
            ? 'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 30% 20%, rgba(8, 145, 178, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(124, 58, 237, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10 opacity-30"
        style={{ mixBlendMode: theme === 'dark' ? 'screen' : 'multiply' }}
      />

      {/* Optimized Data Visualization Blobs - reduced count for performance */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => {
          const width = 120 + i * 20;
          const height = 120 + i * 20;
          const left = 10 + i * 25;
          const top = 15 + i * 20;
          
          return (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${width}px`,
                height: `${height}px`,
                left: `${left}%`,
                top: `${top}%`,
                background: `radial-gradient(circle, ${
                  theme === 'dark' 
                    ? ['rgba(6, 182, 212, 0.12)', 'rgba(139, 92, 246, 0.12)', 'rgba(20, 184, 166, 0.12)', 'rgba(236, 72, 153, 0.08)'][i % 4]
                    : ['rgba(6, 182, 212, 0.18)', 'rgba(139, 92, 246, 0.18)', 'rgba(20, 184, 166, 0.18)', 'rgba(59, 130, 246, 0.12)'][i % 4]
                }, transparent)`,
                borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
                filter: 'blur(60px)',
                willChange: 'transform',
              }}
              animate={{
                x: [0, 80 - i * 20, 0],
                y: [0, 60 - i * 15, 0],
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>

      {/* Data Grid Pattern */}
      <div 
        className="fixed inset-0 -z-10 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(${theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.2)'} 1px, transparent 1px),
            linear-gradient(90deg, ${theme === 'dark' ? 'rgba(6, 182, 212, 0.1)' : 'rgba(6, 182, 212, 0.2)'} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 3D Data Visualization Elements */}
      <DataVisualization3D />
      
      {/* 3D AI-Related Objects */}
      <AI3DObjects />
    </>
  );
};

export default AnimatedBackground;

