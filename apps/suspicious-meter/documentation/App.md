# File Documentation: `App.tsx`

## File Name and Path

- File: `App.tsx`
- Path: `apps/suspicious-meter/App.tsx`

## Purpose

Defines the entire user interface and interaction flow for Suspicious Meter. This file renders the only screen in the app, captures user input, calls the suspicion analysis helper, and displays the resulting score, verdict, and detected signals.

## Main Exports

- Default export: `App`

## Inputs

- User-entered `subject` text from the `TextInput`
- Button press event from the `Analyze` action

## Internal State or Managed Data

- `subject`: stores the current text typed by the user
- `result`: stores the latest generated score, verdict, and detected signals, or `null` before analysis

## Key Logic and Behavior

- Uses `getVerdict(score)` to map a numeric score to one of four humorous verdict messages
- Trims the input to prevent analysis of blank text
- Disables the `Analyze` button when the input is empty after trimming
- Calls `calculateSuspicionScore(subject)` when the button is pressed
- Displays detected suspicious keywords when matches are found
- Falls back to a friendly empty state message when no signals are detected
- Displays either a placeholder state or the latest analysis result in the same screen layout

## Dependencies Used

- `react`: `useState` for local screen state
- `react-native`: `Pressable`, `SafeAreaView`, `StyleSheet`, `Text`, `TextInput`, `View`
- `./utils/calculateSuspicionScore`: helper for normalized keyword detection and score calculation

## Notes About Design or Implementation Decisions

- The app uses a single-file screen to keep version 1 beginner-friendly and easy to scan
- The verdict helper remains in the screen file because it is tightly coupled to presentation, while the scoring logic was extracted because it became meaningful standalone behavior
- Styling uses warm neutral colors to make the joke-oriented interface feel playful without adding visual complexity

## Update Summary

- Created the initial single-screen Expo app for entering text and generating a humorous suspicion score
- Added local state for the input and result
- Implemented verdict mapping and conditional result rendering
- Replaced fully random scoring with helper-based keyword analysis and signal display
