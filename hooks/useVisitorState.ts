/**
 * React hook for visitor state management
 * Provides easy access to visitor state and animation duration logic
 */

import { useState, useEffect, useCallback } from 'react';
import {
  VisitorState,
  AnimationDuration,
  loadVisitorState,
  updateVisitorState,
  getAnimationDuration,
  setSkipPreference,
  resetVisitorState,
  getVisitorStats,
} from '../utils/visitorState';

export interface UseVisitorStateReturn {
  visitorState: VisitorState;
  animationDuration: AnimationDuration;
  isLoading: boolean;
  updateVisit: () => void;
  setSkipPreference: (skip: boolean) => void;
  resetState: () => void;
  stats: ReturnType<typeof getVisitorStats>;
}

/**
 * Hook for managing visitor state and animation preferences
 */
export const useVisitorState = (): UseVisitorStateReturn => {
  const [visitorState, setVisitorState] = useState<VisitorState>(() => loadVisitorState());
  const [isLoading, setIsLoading] = useState(true);

  // Initialize visitor state on mount
  useEffect(() => {
    const initializeState = () => {
      try {
        const currentState = loadVisitorState();
        setVisitorState(currentState);
      } catch (error) {
        console.warn('Failed to initialize visitor state:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeState();
  }, []);

  // Update visitor state for current visit
  const updateVisit = useCallback(() => {
    try {
      const updatedState = updateVisitorState();
      setVisitorState(updatedState);
    } catch (error) {
      console.warn('Failed to update visitor state:', error);
    }
  }, []);

  // Update skip preference
  const handleSetSkipPreference = useCallback((skip: boolean) => {
    try {
      const success = setSkipPreference(skip);
      if (success) {
        setVisitorState(prev => ({
          ...prev,
          skipPreference: skip,
        }));
      }
    } catch (error) {
      console.warn('Failed to set skip preference:', error);
    }
  }, []);

  // Reset visitor state
  const resetState = useCallback(() => {
    try {
      const success = resetVisitorState();
      if (success) {
        const freshState = loadVisitorState();
        setVisitorState(freshState);
      }
    } catch (error) {
      console.warn('Failed to reset visitor state:', error);
    }
  }, []);

  // Calculate animation duration based on current state
  const animationDuration = getAnimationDuration(visitorState);

  // Get visitor statistics
  const stats = getVisitorStats();

  return {
    visitorState,
    animationDuration,
    isLoading,
    updateVisit,
    setSkipPreference: handleSetSkipPreference,
    resetState,
    stats,
  };
};

/**
 * Hook for components that only need animation duration
 */
export const useAnimationDuration = (): AnimationDuration => {
  const visitorState = loadVisitorState();
  return getAnimationDuration(visitorState);
};

/**
 * Hook for checking if user should see full animation
 */
export const useShouldShowFullAnimation = (): boolean => {
  const { animationDuration } = useVisitorState();
  return !animationDuration.shortened;
};