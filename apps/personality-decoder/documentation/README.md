# Personality Decoder Documentation

## Overview

Personality Decoder is a lightweight Expo mini app that predicts a playful 4-letter personality type from a short self-description using rule-based keyword scoring. Version 1 is intentionally simple: it uses local text analysis only, keeps everything on one screen, and does not rely on machine learning, external datasets, or backend services.

## Project Structure

```text
apps/personality-decoder/
  App.tsx
  README.md
  app.json
  package.json
  tsconfig.json
  assets/
    personality.png
  utils/
    analyzePersonalityFromText.ts
  documentation/
    README.md
    component-index.md
    changelog.md
    App.md
    project-readme.md
    app.json.md
    package.json.md
    tsconfig.json.md
    utils/
      analyzePersonalityFromText.md
```

## Documentation Structure

The `documentation` folder mirrors the project structure for all maintained source and configuration files in the app. Each documented file explains its purpose, inputs, exports, behavior, dependencies, implementation notes, and recent changes.

The project also includes an `assets` folder with a preview image used by the local project `README.md` so the app can show a visual preview on GitHub.

## Behavior Summary

- The user enters a short paragraph describing themselves
- The user taps `Analyze`
- The app normalizes the text for reliable keyword matching
- The app scores the text across the `E/I`, `S/N`, `T/F`, and `J/P` dimensions
- The app builds a 4-letter type from the winning side of each dimension
- The app returns a confidence score, short explanation, and dimension breakdown
- The result is displayed on the same screen

## Maintenance Notes

- This project should stay beginner-friendly and lightweight unless there is a clear reason to expand it
- Any new maintained source or configuration file must receive matching documentation
- `component-index.md` should list every documented file with a short description
- `changelog.md` should capture creations, updates, and removals in chronological order

## Update Summary

- Created the initial documentation set for the Personality Decoder Expo app
- Documented the one-screen project structure and rule-based analysis flow
- Added project README preview support using the detected `assets/personality.png` image
