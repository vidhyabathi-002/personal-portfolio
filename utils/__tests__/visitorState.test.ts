/**
 * Tests for visitor state management utilities
 */

import {
  loadVisitorState,
  saveVisitorState,
  updateVisitorState,
  isReturningVisitor,
  getAnimationDuration,
  setSkipPreference,
  resetVisitorState,
  getVisitorStats,
  VisitorState,
} from '../visitorState';

// Mock localStorage
const mockLocalStorage = (() => {
  let store: Record<string, string> = {};

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

describe('Visitor State Management', () => {
  beforeEach(() => {
    mockLocalStorage.clear();
    jest.clearAllMocks();
  });

  describe('loadVisitorState', () => {
    it('should return default state for new visitors', () => {
      const state = loadVisitorState();
      
      expect(state.isFirstVisit).toBe(true);
      expect(state.lastVisit).toBe(null);
      expect(state.skipPreference).toBe(false);
      expect(state.visitCount).toBe(0);
    });

    it('should load existing state from localStorage', () => {
      const testState: VisitorState = {
        isFirstVisit: false,
        lastVisit: new Date('2023-01-01'),
        skipPreference: true,
        visitCount: 5,
      };

      saveVisitorState(testState);
      const loadedState = loadVisitorState();

      expect(loadedState.isFirstVisit).toBe(false);
      expect(loadedState.skipPreference).toBe(true);
      expect(loadedState.visitCount).toBe(5);
      expect(loadedState.lastVisit).toEqual(new Date('2023-01-01'));
    });

    it('should handle corrupted localStorage data gracefully', () => {
      mockLocalStorage.setItem('portfolio_visitor_state', 'invalid json');
      
      const state = loadVisitorState();
      
      expect(state.isFirstVisit).toBe(true);
      expect(state.visitCount).toBe(0);
    });
  });

  describe('updateVisitorState', () => {
    it('should increment visit count and update last visit', () => {
      const initialState = loadVisitorState();
      expect(initialState.visitCount).toBe(0);

      const updatedState = updateVisitorState();
      
      expect(updatedState.visitCount).toBe(1);
      expect(updatedState.lastVisit).toBeInstanceOf(Date);
      expect(updatedState.isFirstVisit).toBe(true); // Still first visit on count 1
    });

    it('should mark as not first visit after multiple visits', () => {
      // Simulate multiple visits
      updateVisitorState(); // Visit 1
      const secondVisit = updateVisitorState(); // Visit 2
      
      expect(secondVisit.visitCount).toBe(2);
      expect(secondVisit.isFirstVisit).toBe(false);
    });
  });

  describe('isReturningVisitor', () => {
    it('should return false for first-time visitors', () => {
      const state: VisitorState = {
        isFirstVisit: true,
        lastVisit: null,
        skipPreference: false,
        visitCount: 0,
      };

      expect(isReturningVisitor(state)).toBe(false);
    });

    it('should return true for recent returning visitors', () => {
      const recentDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000); // 2 days ago
      const state: VisitorState = {
        isFirstVisit: false,
        lastVisit: recentDate,
        skipPreference: false,
        visitCount: 2,
      };

      expect(isReturningVisitor(state)).toBe(true);
    });

    it('should return false for visitors who haven\'t been back in a while', () => {
      const oldDate = new Date(Date.now() - 10 * 24 * 60 * 60 * 1000); // 10 days ago
      const state: VisitorState = {
        isFirstVisit: false,
        lastVisit: oldDate,
        skipPreference: false,
        visitCount: 2,
      };

      expect(isReturningVisitor(state)).toBe(false);
    });
  });

  describe('getAnimationDuration', () => {
    it('should return minimal duration for users with skip preference', () => {
      const state: VisitorState = {
        isFirstVisit: false,
        lastVisit: new Date(),
        skipPreference: true,
        visitCount: 1,
      };

      const duration = getAnimationDuration(state);
      
      expect(duration.total).toBe(500);
      expect(duration.shortened).toBe(true);
    });

    it('should return shortened duration for returning visitors', () => {
      const recentDate = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);
      const state: VisitorState = {
        isFirstVisit: false,
        lastVisit: recentDate,
        skipPreference: false,
        visitCount: 2,
      };

      const duration = getAnimationDuration(state);
      
      expect(duration.total).toBe(1500);
      expect(duration.shortened).toBe(true);
    });

    it('should return full duration for first-time visitors', () => {
      const state: VisitorState = {
        isFirstVisit: true,
        lastVisit: null,
        skipPreference: false,
        visitCount: 0,
      };

      const duration = getAnimationDuration(state);
      
      expect(duration.total).toBe(4000);
      expect(duration.shortened).toBe(false);
    });
  });

  describe('setSkipPreference', () => {
    it('should update skip preference in localStorage', () => {
      // First create some initial state
      updateVisitorState();
      
      const success = setSkipPreference(true);
      expect(success).toBe(true);

      const updatedState = loadVisitorState();
      expect(updatedState.skipPreference).toBe(true);
    });
  });

  describe('resetVisitorState', () => {
    it('should clear visitor state from localStorage', () => {
      // Create some state first
      updateVisitorState();
      setSkipPreference(true);
      
      const success = resetVisitorState();
      expect(success).toBe(true);

      const freshState = loadVisitorState();
      expect(freshState.isFirstVisit).toBe(true);
      expect(freshState.visitCount).toBe(0);
      expect(freshState.skipPreference).toBe(false);
    });
  });

  describe('getVisitorStats', () => {
    it('should return comprehensive visitor statistics', () => {
      updateVisitorState();
      setSkipPreference(true);
      
      const stats = getVisitorStats();
      
      expect(stats.visitCount).toBe(1);
      expect(stats.isFirstVisit).toBe(true);
      expect(stats.skipPreference).toBe(true);
      expect(stats.isReturningVisitor).toBe(false);
      expect(typeof stats.daysSinceLastVisit).toBe('number');
    });
  });
});