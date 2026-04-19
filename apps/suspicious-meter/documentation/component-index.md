# Component Index

| File | Description |
|------|-------------|
| `App.tsx` | Main Expo screen that collects input, runs the suspicion analysis helper, and displays the score, verdict, and detected signals. |
| `README.md` | Project overview file that introduces the app, displays the local UI preview image, and explains how to run the app locally. |
| `app.json` | Expo application metadata and basic runtime configuration for the project. |
| `package-lock.json` | npm lockfile that records the resolved dependency tree for reproducible installs. |
| `package.json` | Project package manifest containing scripts and Expo dependencies. |
| `tsconfig.json` | TypeScript configuration extending Expo defaults with strict type checking. |
| `utils/calculateSuspicionScore.ts` | Helper module that normalizes input text, detects suspicious keywords, and computes the final score. |

## Update Summary

- Added index entries for all source and configuration files in the initial Suspicious Meter project
- Updated the index to include the rule-based scoring helper and revised `App.tsx` description
- Added the package lockfile entry after dependency installation created `package-lock.json`
- Added the project README entry after wiring the detected assets preview image into the app overview
- Updated the README entry to include local setup and run instructions
