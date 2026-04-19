# File Documentation: `utils/analyzePersonalityFromText.ts`

## File Name and Path

- File: `analyzePersonalityFromText.ts`
- Path: `apps/personality-decoder/utils/analyzePersonalityFromText.ts`

## Purpose

Provides the rule-based personality analysis used by Personality Decoder. This helper normalizes user text, scores each personality dimension from keyword matches, determines the winning letters, computes a simple confidence score, and returns a readable explanation and breakdown.

## Main Exports

- `analyzePersonalityFromText(text)`
- `PersonalityAnalysisResult`

## Inputs

- `text`: the raw self-description entered by the user

## Internal State or Managed Data

- `DIMENSIONS`: scoring configuration for the `E/I`, `S/N`, `T/F`, and `J/P` dimensions
- `LETTER_MEANINGS`: explanation strings used to build the readable result text
- Normalized text used for reliable matching

## Key Logic and Behavior

- Converts input text to lowercase
- Normalizes punctuation and spacing to make phrase matching more reliable
- Scores both sides of each personality dimension by checking for keyword matches
- Uses the higher-scoring side as the winning letter for each pair
- Builds the 4-letter type from the four winning dimensions
- Computes a simple deterministic confidence score from the dimension win margins
- Returns the type, confidence, explanation, and breakdown lines

## Dependencies Used

- Built-in JavaScript string and array methods only

## Notes About Design or Implementation Decisions

- The helper was extracted into `utils` so the main screen can stay focused on UI and state management
- The scoring system is intentionally transparent and lightweight for version 1
- Ties currently lean toward the right-side letter in each dimension so the function always returns a complete type without extra branching

## Update Summary

- Created the initial rule-based personality analysis helper
- Added keyword scoring, deterministic type generation, confidence calculation, and explanation output
