# Changelog

## 2026-04-18

- Created `App.tsx` with a single-screen Suspicious Meter interface, local input state, random score generation, and verdict display logic
- Created `package.json` with Expo scripts and dependencies for a minimal TypeScript app
- Created `app.json` with Expo app metadata and light UI configuration
- Created `tsconfig.json` extending Expo TypeScript defaults with strict mode
- Created `documentation/README.md` to describe the project and its documentation system
- Created `documentation/component-index.md` to index all documented project files
- Created `documentation/App.md` to document the main screen implementation
- Created `documentation/package.json.md` to document the package manifest
- Created `documentation/app.json.md` to document the Expo configuration
- Created `documentation/tsconfig.json.md` to document the TypeScript configuration
- Updated `App.tsx` to replace fully random scoring with rule-based text analysis and a detected-signals display
- Created `utils/calculateSuspicionScore.ts` to normalize input, match weighted keywords, and compute the final suspicion score
- Updated `documentation/README.md` to describe the rule-based scoring behavior and expanded project structure
- Updated `documentation/component-index.md` to include the scoring helper and revised app description
- Updated `documentation/App.md` to reflect the new helper-driven analysis flow and signal display
- Created `documentation/utils/calculateSuspicionScore.md` to document the text analysis helper module
- Created `package-lock.json` during dependency installation to capture the resolved npm dependency tree
- Created `documentation/package-lock.json.md` to document the npm lockfile
- Updated `documentation/README.md` and `documentation/component-index.md` to include the lockfile and clarify generated-folder exclusions
- Updated `documentation/package.json.md` to reflect the current installed Expo dependency versions
- Created `README.md` with a GitHub-ready app preview section using the detected `assets/suspicious.png` image
- Updated `documentation/README.md` and `documentation/component-index.md` to reflect project preview image support
- Created `documentation/project-readme.md` to document the project overview README
- Updated `README.md` to add a dedicated purpose section, local run instructions, and implementation notes
- Updated `documentation/component-index.md` and `documentation/project-readme.md` to reflect the README run-guide improvements
