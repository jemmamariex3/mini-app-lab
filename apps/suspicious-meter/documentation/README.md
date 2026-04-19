# Suspicious Meter Documentation

## Overview

Suspicious Meter is a simple Expo mini app that lets a user enter a person, behavior, or situation and receive a playful suspicion score from 0 to 100. The score is based on lightweight keyword detection with a small random variation, so repeated inputs feel consistent without making the app overly serious. The app is designed for learning and rapid prototyping, so it intentionally uses a single-screen flow, local state only, and no backend services.

## Project Structure

```text
apps/suspicious-meter/
  App.tsx
  README.md
  app.json
  package-lock.json
  package.json
  tsconfig.json
  assets/
    suspicious.png
  utils/
    calculateSuspicionScore.ts
  documentation/
    README.md
    component-index.md
    changelog.md
    App.md
    project-readme.md
    app.json.md
    package-lock.json.md
    package.json.md
    tsconfig.json.md
    utils/
      calculateSuspicionScore.md
```

## Documentation Structure

The `documentation` folder mirrors the project structure at a small scale because this version of the app is intentionally minimal. Each source or configuration file in the project has a matching markdown document that explains its purpose, exports, inputs, logic, dependencies, implementation notes, and recent changes.

Generated development artifacts such as `node_modules/` and `.expo/` are intentionally excluded from the documentation system because they are recreated locally and are not maintained as source files.

The project also includes an `assets` folder with a preview image used by the local project `README.md` so the app can show a visual preview on GitHub.

## Behavior Summary

- The user enters text describing a person, behavior, or situation
- The user taps `Analyze`
- The app normalizes the input and checks it against weighted suspicious keywords
- The app adds a small random variation to keep the result playful
- The app maps that score to a playful verdict
- The app lists the detected suspicious signals
- The result is displayed on the same screen

## Maintenance Notes

- This project should remain intentionally simple unless there is a clear reason to expand it
- Any new source or configuration files added to the project must also receive matching documentation
- `component-index.md` should always reflect the full set of documented files
- `changelog.md` should record file creation, updates, and removals in chronological order

## Update Summary

- Created the initial project documentation set for the Suspicious Meter Expo app
- Documented the single-screen app structure and supporting configuration files
- Updated the project structure and behavior summary for rule-based suspicion analysis
- Added the package lockfile to the documented project structure and clarified generated-folder exclusions
- Added project README preview support using the detected `assets/suspicious.png` image
