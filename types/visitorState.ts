/**
 * Type definitions for visitor state management
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

export interface VisitorStats {
  visitCount: number;
  isFirstVisit: boolean;
  daysSinceLastVisit: number | null;
  isReturningVisitor: boolean;
  skipPreference: boolean;
}

export interface AnimationConfig {
  duration: AnimationDuration;
  phases: {
    loading: number;
    welcome: number;
    brand: number;
    transition: number;
  };
}