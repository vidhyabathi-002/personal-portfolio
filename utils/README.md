# Visitor State Management

This module provides utilities for managing visitor state and determining animation behavior based on user visit patterns.

## Features

- **First-time vs Returning Visitor Detection**: Automatically tracks visitor patterns
- **localStorage Integration**: Persists visitor preferences and history
- **Animation Duration Logic**: Determines appropriate animation length based on visitor status
- **Skip Preferences**: Allows users to set preferences for animation behavior
- **Error Handling**: Graceful fallbacks when localStorage is unavailable

## Usage

### Basic Usage

```typescript
import { useVisitorState } from '../hooks/useVisitorState';

function WelcomeAnimation() {
  const { visitorState, animationDuration, updateVisit } = useVisitorState();
  
  // Update visitor state when component mounts
  useEffect(() => {
    updateVisit();
  }, [updateVisit]);
  
  // Use animation duration for timing
  const shouldShowFullAnimation = !animationDuration.shortened;
  const totalDuration = animationDuration.total;
  
  return (
    <div>
      {shouldShowFullAnimation ? 'Full Animation' : 'Shortened Animation'}
      <p>Duration: {totalDuration}ms</p>
    </div>
  );
}
```

### Direct Utility Usage

```typescript
import {
  loadVisitorState,
  updateVisitorState,
  getAnimationDuration,
  setSkipPreference
} from '../utils/visitorState';

// Load current visitor state
const state = loadVisitorState();

// Update for current visit
const updatedState = updateVisitorState();

// Get appropriate animation duration
const duration = getAnimationDuration(state);

// Set user preference to skip animations
setSkipPreference(true);
```

## Animation Duration Logic

The system determines animation duration based on visitor status:

- **First-time visitors**: 4000ms (full animation)
- **Returning visitors** (within 7 days): 1500ms (shortened)
- **Skip preference enabled**: 500ms (minimal transition)

## Requirements Fulfilled

- **4.1**: Provides skip option for returning visitors
- **4.2**: Enables immediate transition when skipped  
- **4.3**: Shows shortened animation for returning visitors

## Testing

Use the demo functions for manual testing:

```typescript
import { demoVisitorState } from '../utils/visitorStateDemo';

// Run all tests
demoVisitorState.runAllTests();

// Or test individual features
demoVisitorState.testFirstVisit();
demoVisitorState.testSkipPreference();
```