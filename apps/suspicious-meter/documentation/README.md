# Suspicious Meter Documentation

## Overview

Suspicious Meter is a simple Expo mini app that lets a user enter a person, behavior, or situation and receive a humorous random suspicion score from 0 to 100. The app is designed for learning and rapid prototyping, so it intentionally uses a single-screen flow, local state only, and no backend services.

## Project Structure

```text
apps/suspicious-meter/
  App.tsx
  app.json
  package.json
  tsconfig.json
  documentation/
    README.md
    component-index.md
    changelog.md
    App.md
    app.json.md
    package.json.md
    tsconfig.json.md
```

## Documentation Structure

The `documentation` folder mirrors the project structure at a small scale because this version of the app is intentionally minimal. Each source or configuration file in the project has a matching markdown document that explains its purpose, exports, inputs, logic, dependencies, implementation notes, and recent changes.

## Behavior Summary

- The user enters text describing a person, behavior, or situation
- The user taps `Analyze`
- The app generates a random score from 0 to 100
- The app maps that score to a playful verdict
- The result is displayed on the same screen

## Maintenance Notes

- This project should remain intentionally simple unless there is a clear reason to expand it
- Any new source or configuration files added to the project must also receive matching documentation
- `component-index.md` should always reflect the full set of documented files
- `changelog.md` should record file creation, updates, and removals in chronological order

## Update Summary

- Created the initial project documentation set for the Suspicious Meter Expo app
- Documented the single-screen app structure and supporting configuration files
