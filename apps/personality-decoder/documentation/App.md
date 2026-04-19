# File Documentation: `App.tsx`

## File Name and Path

- File: `App.tsx`
- Path: `apps/personality-decoder/App.tsx`

## Purpose

Defines the entire user interface and interaction flow for Personality Decoder. This file renders the only screen in the app, captures the user's self-description, runs the analysis helper, and displays the predicted type, confidence score, explanation, and dimension breakdown.

## Main Exports

- Default export: `App`

## Inputs

- User-entered `description` text from the multiline `TextInput`
- Button press event from the `Analyze` action

## Internal State or Managed Data

- `description`: stores the current paragraph typed by the user
- `result`: stores the latest analysis result, or `null` before analysis

## Key Logic and Behavior

- Trims the input to prevent analysis of blank text
- Disables the `Analyze` button when no meaningful text is present
- Calls `analyzePersonalityFromText(description)` when the button is pressed
- Displays the predicted 4-letter type, confidence percentage, explanation, and breakdown on the same screen
- Falls back to a placeholder card before any analysis has been run

## Dependencies Used

- `react`: `useState` for local screen state
- `react-native`: `Pressable`, `SafeAreaView`, `ScrollView`, `StyleSheet`, `Text`, `TextInput`, `View`
- `./utils/analyzePersonalityFromText`: helper for personality scoring and result generation

## Notes About Design or Implementation Decisions

- The app stays on one screen to keep version 1 easy to understand and maintain
- The result view is built directly in the screen file because the UI is still small enough to read comfortably without extra component layers
- A scroll view is used so the multiline input and results stay comfortable on smaller devices

## Update Summary

- Created the initial single-screen Expo app for rule-based personality decoding
- Added local state for the user input and analysis result
- Implemented conditional rendering for the result and placeholder states
