# File Documentation: `src/data/passages.ts`

## File Name and Path

- File: `passages.ts`
- Path: `apps/reading-speed-test/src/data/passages.ts`

## Purpose

Provides the fixed reading-passage dataset used by Reading Speed Test. This file stores the passage text, word counts, and multiple-choice comprehension questions for version 1 of the app.

## Main Exports

- `passages`
- `Passage`
- `PassageQuestion`

## Inputs

- Static passage content
- Static question prompts, answer options, and correct answers

## Internal State or Managed Data

- Three passage objects with unique identifiers
- Passage titles and full text
- Precomputed `wordCount` values used for WPM calculations
- Three comprehension questions per passage with answer options and correct answers

## Key Logic and Behavior

- Exports a typed array of passage objects
- Keeps the test content local so the app can run without a backend
- Associates each passage with its own comprehension question set
- Supplies the `wordCount` field used by the app's reading-speed calculations

## Dependencies Used

- TypeScript type annotations only

## Notes About Design or Implementation Decisions

- The dataset is stored in a dedicated data file so content can grow without making the screen logic harder to read
- Word counts are stored explicitly because the app calculates WPM from the selected passage metadata
- The file uses plain objects and arrays to keep content editing beginner-friendly

## Update Summary

- Created the initial passage dataset with three passages and three comprehension questions per passage
