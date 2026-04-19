# Component Index

| File | Description |
|------|-------------|
| `App.tsx` | Main Expo screen that collects the user's self-description and displays the predicted personality type, confidence, explanation, and breakdown. |
| `README.md` | Project overview file that introduces the app, displays the local UI preview image, and explains how to run the app locally. |
| `app.json` | Expo application metadata and basic runtime configuration for the project. |
| `package.json` | Project package manifest containing scripts and Expo dependencies. |
| `tsconfig.json` | TypeScript configuration extending Expo defaults with strict type checking. |
| `utils/analyzePersonalityFromText.ts` | Helper module that normalizes text, scores all four personality dimensions, and returns the analysis result. |

## Update Summary

- Added index entries for all source and configuration files in the initial Personality Decoder project
- Added the project README entry after wiring the detected assets preview image into the app overview
- Updated the README entry to include local setup and run instructions
