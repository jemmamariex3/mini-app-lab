# File Documentation: `package.json`

## File Name and Path

- File: `package.json`
- Path: `apps/suspicious-meter/package.json`

## Purpose

Defines the package metadata, Expo run scripts, and dependencies required to run the Suspicious Meter mini app.

## Main Exports

- Project manifest values consumed by npm and Expo tooling

## Inputs

- Script commands invoked by the developer such as `npm start`, `npm run ios`, `npm run android`, and `npm run web`
- Dependency version requirements resolved during package installation

## Internal State or Managed Data

- Dependency list for runtime packages
- Development dependency list for TypeScript typing and tooling
- Script definitions for local development entry points

## Key Logic and Behavior

- Points the app entry to Expo's standard `AppEntry.js`
- Provides minimal Expo scripts for local development across supported platforms
- Pins versions needed for a straightforward Expo TypeScript setup

## Dependencies Used

- `expo`
- `expo-status-bar`
- `react`
- `react-native`
- `@types/react`
- `typescript`

## Notes About Design or Implementation Decisions

- The manifest stays minimal to keep the project approachable and aligned with the repo's lightweight mini app goal
- No extra libraries were added because the app only needs local state, built-in React Native components, and Expo defaults

## Update Summary

- Created the initial Expo package manifest for Suspicious Meter
- Added only the dependencies needed for a basic TypeScript Expo app
- Updated dependency versions to match the installed Expo 54 toolchain used by the current project state
