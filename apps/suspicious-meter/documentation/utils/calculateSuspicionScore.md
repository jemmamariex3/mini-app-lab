# File Documentation: `utils/calculateSuspicionScore.ts`

## File Name and Path

- File: `calculateSuspicionScore.ts`
- Path: `apps/suspicious-meter/utils/calculateSuspicionScore.ts`

## Purpose

Provides the rule-based text analysis used by Suspicious Meter. This helper normalizes user input, detects suspicious keywords and phrases, applies weighted scoring, adds a small random variation, and returns the final score along with the matched signals.

## Main Exports

- `calculateSuspicionScore(text)`

## Inputs

- `text`: the raw user-entered description of a person, behavior, or situation

## Internal State or Managed Data

- `BASE_SCORE`: starting suspicion value before keyword matches
- `MIN_SCORE` and `MAX_SCORE`: score boundaries used for clamping
- `SUSPICION_RULES`: weighted list of suspicious keywords and phrases
- Normalized text value used for reliable case-insensitive matching

## Key Logic and Behavior

- Converts input text to lowercase
- Normalizes punctuation and spacing to make phrase matching more reliable
- Checks the text for all configured suspicious keywords and phrases
- Stacks multiple matches together by summing their weights
- Adds a small random variation from `-3` to `+3`
- Clamps the final score to the `0` to `100` range
- Returns both the score and the list of detected signals

## Dependencies Used

- Built-in JavaScript string and array methods only

## Notes About Design or Implementation Decisions

- The helper was extracted into `utils` once scoring became more than a one-line random calculation
- Phrase labels double as the user-facing signal output so the display stays simple and transparent
- Normalization replaces punctuation with spaces so phrases like `fake-mustache` and `fake mustache` can still match consistently

## Update Summary

- Created the initial rule-based suspicion analysis helper
- Added weighted keyword matching, small random variation, and score clamping
