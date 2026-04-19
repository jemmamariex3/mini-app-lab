# File Documentation: `app.json`

## File Name and Path

- File: `app.json`
- Path: `apps/reading-speed-test/app.json`

## Purpose

Stores the Expo application configuration used to identify and launch the Reading Speed Test app.

## Main Exports

- Expo configuration object under the `expo` key

## Inputs

- App metadata values such as `name`, `slug`, `version`, and display preferences

## Internal State or Managed Data

- Static configuration for orientation, interface style, splash appearance, and bundled assets

## Key Logic and Behavior

- Declares the public app name and Expo slug
- Locks the app to portrait orientation for a mobile-focused reading flow
- Sets the interface style to light mode
- Defines a splash background color that matches the app theme

## Dependencies Used

- Expo configuration schema

## Notes About Design or Implementation Decisions

- The configuration stays intentionally small because version 1 has no advanced native requirements
- The splash background color matches the app background to keep transitions visually smooth

## Update Summary

- Created the initial Expo runtime configuration for Reading Speed Test
