# File Documentation: `app.json`

## File Name and Path

- File: `app.json`
- Path: `apps/suspicious-meter/app.json`

## Purpose

Stores the Expo application configuration used to identify and launch the Suspicious Meter app.

## Main Exports

- Expo configuration object under the `expo` key

## Inputs

- App metadata values such as `name`, `slug`, `version`, and display preferences

## Internal State or Managed Data

- Static configuration for orientation, interface style, splash appearance, and bundled assets

## Key Logic and Behavior

- Declares the public app name and Expo slug
- Locks the app to portrait orientation for a simple single-screen experience
- Sets the interface style to light mode
- Defines a matching splash background color for a smoother visual handoff into the app

## Dependencies Used

- Expo configuration schema

## Notes About Design or Implementation Decisions

- The configuration is intentionally small because the app has no advanced native requirements in version 1
- The splash background color matches the app background to keep the experience visually consistent

## Update Summary

- Created the initial Expo runtime configuration for Suspicious Meter
- Added only the metadata and display settings needed for the first version
