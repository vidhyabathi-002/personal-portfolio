import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation phase types
export type AnimationPhase = 'loading' | 'welcome' | 'brand' | 'transition' | 'complete';

// Component interfaces
export interface WelcomeAnimationProps {
  children: React.ReactNode;
  onComplete?: () => void;
}

export interface AnimationState {
  isFirstVisit: boolean;
  currentPhase: AnimationPhase;
  isSkipped: boolean;
  isComplete: boolean;
}

export interface AnimationConfig {
  duration: {
    total: number;
    phases: Record<AnimationPhase, number>;
  };
  timing: {
    easing: string;
    stagger: number;
  };
  effects: {
    particles: boolean;
    blur: boolean;
    scale: boolean;
  };
}

export interface VisitorState {
  isFirstVisit: boolean;
  lastVisit: Date | null;
  skipPreference: boolean;
}

// Default animation configuration
const defaultConfig: AnimationConfig = {
  duration: {
    total: 4500, // 4.5 seconds total
    phases: {
      loading: 500,
      welcome: 1500,
      brand: 1500,
      transition: 1000,
      complete: 0
    }
  },
  timing: {
    easing: 'easeInOut',
    stagger: 0.1
  },
  effects: {
    particles: true,
    blur: true,
    scale: true
  }
};

const WelcomeAnimation: React.FC<WelcomeAnimationProps> = ({ 
  children, 
  onComplete 
}) => {
  // Animation state management
  const [animationState, setAnimationState] = useState<AnimationState>({
    isFirstVisit: true,
    currentPhase: 'loading',
    isSkipped: false,
    isComplete: false
  });

  const [config] = useState<AnimationConfig>(defaultConfig);

  // Handle animation completion
  const handleComplete = useCallback(() => {
    setAnimationState(prev => ({
      ...prev,
      currentPhase: 'complete',
      isComplete: true
    }));
    onComplete?.();
  }, [onComplete]);

  // Handle skip functionality
  const handleSkip = useCallback(() => {
    setAnimationState(prev => ({
      ...prev,
      isSkipped: true,
      isComplete: true
    }));
    handleComplete();
  }, [handleComplete]);

  // Phase transition logic
  const advancePhase = useCallback(() => {
    setAnimationState(prev => {
      const phases: AnimationPhase[] = ['loading', 'welcome', 'brand', 'transition', 'complete'];
      const currentIndex = phases.indexOf(prev.currentPhase);
      const nextPhase = phases[currentIndex + 1] || 'complete';
      
      if (nextPhase === 'complete') {
        handleComplete();
      }
      
      return {
        ...prev,
        currentPhase: nextPhase
      };
    });
  }, [handleComplete]);

  // Initialize animation on mount
  useEffect(() => {
    // Start the animation sequence
    const timer = setTimeout(() => {
      advancePhase();
    }, config.duration.phases.loading);

    return () => clearTimeout(timer);
  }, [advancePhase, config.duration.phases.loading]);

  // Don't render overlay if animation is complete
  if (animationState.isComplete) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence>
        {!animationState.isComplete && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Welcome Overlay - Full screen background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-navy-900 dark:via-blue-900 dark:to-purple-900" />
            
            {/* Animation Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              {/* Current phase indicator for development */}
              <div className="absolute top-4 left-4 text-sm text-white/50">
                Phase: {animationState.currentPhase}
              </div>
              
              {/* Skip button */}
              <button
                onClick={handleSkip}
                className="absolute top-4 right-4 px-4 py-2 text-sm text-white/70 hover:text-white border border-white/30 hover:border-white/50 rounded-lg transition-colors"
                aria-label="Skip animation"
              >
                Skip
              </button>
              
              {/* Phase content placeholder */}
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">
                  {animationState.currentPhase === 'loading' && 'Loading...'}
                  {animationState.currentPhase === 'welcome' && 'Welcome'}
                  {animationState.currentPhase === 'brand' && 'Portfolio'}
                  {animationState.currentPhase === 'transition' && 'Entering...'}
                </h1>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Main content - hidden during animation */}
      <div className={animationState.isComplete ? 'block' : 'hidden'}>
        {children}
      </div>
    </>
  );
};

export default WelcomeAnimation;