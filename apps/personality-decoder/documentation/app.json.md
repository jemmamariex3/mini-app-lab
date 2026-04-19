# File Documentation: `app.json`

## File Name and Path

- File: `app.json`
- Path: `apps/personality-decoder/app.json`

## Purpose

Stores the Expo application configuration used to identify and launch the Personality Decoder app.

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
- Defines a splash background color that matches the app background

## Dependencies Used

- Expo configuration schema

## Notes About Design or Implementation Decisions

- The configuration is intentionally minimal because version 1 does not need advanced native setup
- The splash background color was matched to the app theme for a smoother visual transition

## Update Summary

- Created the initial Expo runtime configuration for Personality Decoder
