# Reading Speed Test Documentation

## Overview

Reading Speed Test is a lightweight Expo mini app that measures reading speed and comprehension through a guided multi-step mobile flow. Version 1 keeps everything local, uses a fixed dataset of reading passages, and focuses on a clean reading experience with simple results.

## Project Structure

```text
apps/reading-speed-test/
  App.tsx
  README.md
  app.json
  package.json
  tsconfig.json
  assets/
    preview.svg
  src/
    data/
      passages.ts
  documentation/
    README.md
    component-index.md
    changelog.md
    App.md
    project-readme.md
    app.json.md
    package.json.md
    tsconfig.json.md
    src/
      data/
        passages.md
```

## Documentation Structure

The `documentation` folder mirrors the maintained source and configuration files used by the app. Each markdown file explains the purpose, inputs, outputs, behavior, dependencies, and recent changes for its matching file.

The project also includes an `assets` folder with a local preview image used by the project `README.md` so the app can show a visual preview on GitHub.

## Behavior Summary

- The user starts from an intro screen
- The app randomly selects one passage from the local data file
- The reading timer starts automatically when the passage screen appears
- The user taps `Finish Reading` to stop the timer
- The app presents three comprehension questions one at a time
- The results screen shows reading speed in words per minute and comprehension accuracy

## Maintenance Notes

- This project should remain lightweight and easy to understand unless there is a clear reason to expand it
- New maintained source or configuration files must receive matching documentation
- `component-index.md` should list every documented file with a short description
- `changelog.md` should record file creation, updates, and removals in chronological order

## Update Summary

- Created the initial documentation set for the Reading Speed Test Expo app
- Documented the multi-step reading flow, local preview asset, and passages data file
