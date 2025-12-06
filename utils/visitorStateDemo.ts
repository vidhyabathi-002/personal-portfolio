/**
 * Demo file to manually test visitor state functionality
 * This can be imported and used in the browser console for testing
 */

import {
  loadVisitorState,
  updateVisitorState,
  getAnimationDuration,
  setSkipPreference,
  resetVisitorState,
  getVisitorStats,
} from './visitorState';

// Export demo functions for manual testing
export const demoVisitorState = {
  // Test initial state
  testInitialState: () => {
    console.log('=== Testing Initial State ===');
    const state = loadVisitorState();
    console.log('Initial state:', state);
    console.log('Animation duration:', getAnimationDuration(state));
    return state;
  },

  // Test first visit
  testFirstVisit: () => {
    console.log('=== Testing First Visit ===');
    const state = updateVisitorState();
    console.log('After first visit:', state);
    console.log('Animation duration:', getAnimationDuration(state));
    console.log('Stats:', getVisitorStats());
    return state;
  },

  // Test returning visitor
  testReturningVisitor: () => {
    console.log('=== Testing Returning Visitor ===');
    const state = updateVisitorState();
    console.log('After second visit:', state);
    console.log('Animation duration:', getAnimationDuration(state));
    console.log('Stats:', getVisitorStats());
    return state;
  },

  // Test skip preference
  testSkipPreference: () => {
    console.log('=== Testing Skip Preference ===');
    setSkipPreference(true);
    const state = loadVisitorState();
    console.log('After setting skip preference:', state);
    console.log('Animation duration:', getAnimationDuration(state));
    return state;
  },

  // Test reset
  testReset: () => {
    console.log('=== Testing Reset ===');
    resetVisitorState();
    const state = loadVisitorState();
    console.log('After reset:', state);
    console.log('Animation duration:', getAnimationDuration(state));
    return state;
  },

  // Run all tests
  runAllTests: () => {
    console.log('🚀 Running all visitor state tests...\n');
    
    demoVisitorState.testInitialState();
    console.log('\n');
    
    demoVisitorState.testFirstVisit();
    console.log('\n');
    
    demoVisitorState.testReturningVisitor();
    console.log('\n');
    
    demoVisitorState.testSkipPreference();
    console.log('\n');
    
    demoVisitorState.testReset();
    console.log('\n✅ All tests completed!');
  }
};

// Auto-run tests if this file is imported directly
if (typeof window !== 'undefined') {
  (window as any).demoVisitorState = demoVisitorState;
  console.log('Visitor state demo functions available as window.demoVisitorState');
  console.log('Run demoVisitorState.runAllTests() to test all functionality');
}