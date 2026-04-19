# File Documentation: `App.tsx`

## File Name and Path

- File: `App.tsx`
- Path: `apps/reading-speed-test/App.tsx`

## Purpose

Defines the full user interface and state flow for Reading Speed Test. This file controls the intro screen, reading passage phase, timed transition into the comprehension questions, and the final results summary.

## Main Exports

- Default export: `App`

## Inputs

- Button presses for starting the test, finishing reading, answering questions, and restarting
- Passage and question data imported from `src/data/passages.ts`

## Internal State or Managed Data

- `step`: current phase of the reading test flow
- `selectedPassage`: randomly chosen passage for the active session
- `readingStartTime`: timestamp used to calculate total reading time
- `answers`: user-selected answers for the three comprehension questions
- `result`: reading speed and comprehension summary shown on the results screen

## Key Logic and Behavior

- Randomly selects one passage from the local dataset when the user starts the test
- Starts the timer automatically when the app moves into the reading screen
- Stops timing immediately when the user taps `Finish Reading`
- Presents one comprehension question per view
- Computes words per minute from the passage `wordCount` and measured reading time
- Computes comprehension accuracy from the number of correct answers
- Allows the user to restart and try another random passage

## Dependencies Used

- `react`: `useState` for local screen state
- `react-native`: `Pressable`, `SafeAreaView`, `ScrollView`, `StyleSheet`, `Text`, `View`
- `./src/data/passages`: local dataset and TypeScript type definitions for passages

## Notes About Design or Implementation Decisions

- The app keeps the entire flow in one screen file to stay beginner-friendly for version 1
- A simple step-based state machine is enough for the current linear test flow
- Timing starts at the moment the passage screen is entered so the UX matches the expected test behavior

## Update Summary

- Created the initial single-screen Expo app for timed reading and comprehension testing
- Added local state for the passage, timer, answers, and results
- Implemented a six-step flow with WPM and comprehension calculations
