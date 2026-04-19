type SuspicionRule = {
  label: string;
  weight: number;
};

type SuspicionAnalysis = {
  score: number;
  detectedSignals: string[];
};

const BASE_SCORE = 10;
const MIN_SCORE = 0;
const MAX_SCORE = 100;

const SUSPICION_RULES: SuspicionRule[] = [
  { label: 'staring', weight: 6 },
  { label: 'quiet', weight: 5 },
  { label: 'late', weight: 7 },
  { label: 'watching', weight: 8 },
  { label: 'whispering', weight: 18 },
  { label: 'lurking', weight: 20 },
  { label: 'hoodie', weight: 15 },
  { label: 'watching from car', weight: 25 },
  { label: 'sunglasses indoors', weight: 30 },
  { label: 'fake mustache', weight: 34 },
  { label: 'microwaving fish', weight: 38 },
  { label: 'banana', weight: 32 },
  { label: 'shovel at midnight', weight: 40 },
];

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const calculateSuspicionScore = (text: string): SuspicionAnalysis => {
  const normalizedText = normalizeText(text);

  const detectedRules = SUSPICION_RULES.filter((rule) =>
    normalizedText.includes(normalizeText(rule.label))
  );

  const matchedWeight = detectedRules.reduce(
    (total, rule) => total + rule.weight,
    0
  );

  const randomVariation = Math.floor(Math.random() * 7) - 3;
  const score = clamp(
    BASE_SCORE + matchedWeight + randomVariation,
    MIN_SCORE,
    MAX_SCORE
  );

  return {
    score,
    detectedSignals: detectedRules.map((rule) => rule.label),
  };
};
