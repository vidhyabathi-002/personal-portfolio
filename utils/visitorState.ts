/**
 * Visitor State Management Utilities
 * Handles detection of first-time vs returning visitors and localStorage persistence
 */

export interface VisitorState {
  isFirstVisit: boolean;
  lastVisit: Date | null;
  skipPreference: boolean;
  visitCount: number;
}

export interface AnimationDuration {
  total: number;
  shortened: boolean;
}

const VISITOR_STATE_KEY = 'portfolio_visitor_state';
const FIRST_VISIT_THRESHOLD_DAYS = 7; // Consider as returning visitor after 7 days

/**
 * Default visitor state for new visitors
 */
const defaultVisitorState: VisitorState = {
  isFirstVisit: true,
  lastVisit: null,
  skipPreference: false,
  visitCount: 0,
};

/**
 * Safely access localStorage with error handling
 */
const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch (error) {
      console.warn('localStorage access failed:', error);
      return null;
    }
  },
  
  setItem: (key: string, value: string): boolean => {
    try {
      localStorage.setItem(key, value);
      return true;
    } catch (error) {
      console.warn('localStorage write failed:', error);
      return false;
    }
  },
  
  removeItem: (key: string): boolean => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.warn('localStorage remove failed:', error);
      return false;
    }
  }
};

/**
 * Load visitor state from localStorage
 */
export const loadVisitorState = (): VisitorState => {
  const stored = safeLocalStorage.getItem(VISITOR_STATE_KEY);
  
  if (!stored) {
    return defaultVisitorState;
  }
  
  try {
    const parsed = JSON.parse(stored);
    
    // Validate and sanitize the loaded data
    return {
      isFirstVisit: Boolean(parsed.isFirstVisit),
      lastVisit: parsed.lastVisit ? new Date(parsed.lastVisit) : null,
      skipPreference: Boolean(parsed.skipPreference),
      visitCount: typeof parsed.visitCount === 'number' ? parsed.visitCount : 0,
    };
  } catch (error) {
    console.warn('Failed to parse visitor state:', error);
    return defaultVisitorState;
  }
};

/**
 * Save visitor state to localStorage
 */
export const saveVisitorState = (state: VisitorState): boolean => {
  try {
    const serialized = JSON.stringify({
      ...state,
      lastVisit: state.lastVisit?.toISOString() || null,
    });
    
    return safeLocalStorage.setItem(VISITOR_STATE_KEY, serialized);
  } catch (error) {
    console.warn('Failed to save visitor state:', error);
    return false;
  }
};

/**
 * Update visitor state for current visit
 */
export const updateVisitorState = (): VisitorState => {
  const currentState = loadVisitorState();
  const now = new Date();
  
  // Determine if this is truly a first visit or returning visit
  const isReturningVisitor = currentState.lastVisit && 
    (now.getTime() - currentState.lastVisit.getTime()) < (FIRST_VISIT_THRESHOLD_DAYS * 24 * 60 * 60 * 1000);
  
  const updatedState: VisitorState = {
    isFirstVisit: currentState.visitCount === 0,
    lastVisit: now,
    skipPreference: currentState.skipPreference,
    visitCount: currentState.visitCount + 1,
  };
  
  saveVisitorState(updatedState);
  return updatedState;
};

/**
 * Check if visitor is returning within the threshold period
 */
export const isReturningVisitor = (state: VisitorState): boolean => {
  if (!state.lastVisit || state.visitCount <= 1) {
    return false;
  }
  
  const daysSinceLastVisit = (Date.now() - state.lastVisit.getTime()) / (1000 * 60 * 60 * 24);
  return daysSinceLastVisit <= FIRST_VISIT_THRESHOLD_DAYS;
};

/**
 * Determine animation duration based on visitor status
 * Requirements: 4.1, 4.2, 4.3
 */
export const getAnimationDuration = (state: VisitorState): AnimationDuration => {
  // If user has skip preference, use minimal duration
  if (state.skipPreference) {
    return {
      total: 500, // 0.5 seconds - just enough for smooth transition
      shortened: true,
    };
  }
  
  // For returning visitors, use shortened animation (1-2 seconds)
  if (isReturningVisitor(state)) {
    return {
      total: 1500, // 1.5 seconds
      shortened: true,
    };
  }
  
  // For first-time visitors, use full animation (3-5 seconds)
  return {
    total: 4000, // 4 seconds
    shortened: false,
  };
};

/**
 * Set user's skip preference
 */
export const setSkipPreference = (skipPreference: boolean): boolean => {
  const currentState = loadVisitorState();
  const updatedState: VisitorState = {
    ...currentState,
    skipPreference,
  };
  
  return saveVisitorState(updatedState);
};

/**
 * Reset visitor state (useful for testing or user preference)
 */
export const resetVisitorState = (): boolean => {
  return safeLocalStorage.removeItem(VISITOR_STATE_KEY);
};

/**
 * Get visitor statistics for debugging/analytics
 */
export const getVisitorStats = () => {
  const state = loadVisitorState();
  return {
    visitCount: state.visitCount,
    isFirstVisit: state.isFirstVisit,
    daysSinceLastVisit: state.lastVisit 
      ? Math.floor((Date.now() - state.lastVisit.getTime()) / (1000 * 60 * 60 * 24))
      : null,
    isReturningVisitor: isReturningVisitor(state),
    skipPreference: state.skipPreference,
  };
};