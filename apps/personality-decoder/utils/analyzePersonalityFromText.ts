type DimensionLetter = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

type KeywordRule = {
  keyword: string;
  weight: number;
};

type DimensionConfig = {
  left: DimensionLetter;
  right: DimensionLetter;
  leftRules: KeywordRule[];
  rightRules: KeywordRule[];
};

export type PersonalityAnalysisResult = {
  type: string;
  confidence: number;
  explanation: string;
  breakdown: string[];
};

const DIMENSIONS: DimensionConfig[] = [
  {
    left: 'E',
    right: 'I',
    leftRules: [
      { keyword: 'outgoing', weight: 2 },
      { keyword: 'social', weight: 2 },
      { keyword: 'group', weight: 1 },
      { keyword: 'people', weight: 1 },
      { keyword: 'party', weight: 2 },
      { keyword: 'talkative', weight: 2 },
      { keyword: 'energized by others', weight: 3 },
    ],
    rightRules: [
      { keyword: 'alone', weight: 2 },
      { keyword: 'quiet', weight: 2 },
      { keyword: 'private', weight: 2 },
      { keyword: 'introspective', weight: 3 },
      { keyword: 'reflective', weight: 2 },
      { keyword: 'deep conversations', weight: 2 },
      { keyword: 'recharge alone', weight: 3 },
    ],
  },
  {
    left: 'S',
    right: 'N',
    leftRules: [
      { keyword: 'practical', weight: 2 },
      { keyword: 'realistic', weight: 2 },
      { keyword: 'details', weight: 2 },
      { keyword: 'facts', weight: 2 },
      { keyword: 'hands on', weight: 2 },
      { keyword: 'routine', weight: 1 },
      { keyword: 'concrete', weight: 2 },
    ],
    rightRules: [
      { keyword: 'ideas', weight: 2 },
      { keyword: 'patterns', weight: 2 },
      { keyword: 'future', weight: 2 },
      { keyword: 'imagination', weight: 2 },
      { keyword: 'abstract', weight: 2 },
      { keyword: 'possibilities', weight: 2 },
      { keyword: 'big picture', weight: 3 },
    ],
  },
  {
    left: 'T',
    right: 'F',
    leftRules: [
      { keyword: 'logic', weight: 2 },
      { keyword: 'rational', weight: 2 },
      { keyword: 'objective', weight: 2 },
      { keyword: 'analyze', weight: 2 },
      { keyword: 'efficient', weight: 2 },
      { keyword: 'strategy', weight: 2 },
      { keyword: 'critical thinking', weight: 3 },
    ],
    rightRules: [
      { keyword: 'feelings', weight: 2 },
      { keyword: 'empathy', weight: 2 },
      { keyword: 'harmony', weight: 2 },
      { keyword: 'values', weight: 2 },
      { keyword: 'caring', weight: 2 },
      { keyword: 'emotional', weight: 2 },
      { keyword: 'compassionate', weight: 3 },
    ],
  },
  {
    left: 'J',
    right: 'P',
    leftRules: [
      { keyword: 'plan', weight: 2 },
      { keyword: 'organized', weight: 2 },
      { keyword: 'structure', weight: 2 },
      { keyword: 'schedule', weight: 2 },
      { keyword: 'prepared', weight: 2 },
      { keyword: 'decided', weight: 2 },
      { keyword: 'checklist', weight: 3 },
    ],
    rightRules: [
      { keyword: 'flexible', weight: 2 },
      { keyword: 'spontaneous', weight: 2 },
      { keyword: 'adapt', weight: 2 },
      { keyword: 'go with the flow', weight: 3 },
      { keyword: 'open ended', weight: 2 },
      { keyword: 'improvise', weight: 2 },
      { keyword: 'last minute', weight: 3 },
    ],
  },
];

const LETTER_MEANINGS: Record<DimensionLetter, string> = {
  E: 'extraversion',
  I: 'introversion',
  S: 'sensing',
  N: 'intuition',
  T: 'thinking',
  F: 'feeling',
  J: 'judging',
  P: 'perceiving',
};

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const scoreRules = (normalizedText: string, rules: KeywordRule[]) =>
  rules.reduce((total, rule) => {
    const normalizedKeyword = normalizeText(rule.keyword);
    return normalizedText.includes(normalizedKeyword)
      ? total + rule.weight
      : total;
  }, 0);

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const analyzePersonalityFromText = (
  text: string
): PersonalityAnalysisResult => {
  const normalizedText = normalizeText(text);

  const dimensionResults = DIMENSIONS.map((dimension) => {
    const leftScore = scoreRules(normalizedText, dimension.leftRules);
    const rightScore = scoreRules(normalizedText, dimension.rightRules);
    const winner =
      leftScore === rightScore ? dimension.right : leftScore > rightScore
        ? dimension.left
        : dimension.right;

    return {
      ...dimension,
      leftScore,
      rightScore,
      winner,
    };
  });

  const type = dimensionResults.map((dimension) => dimension.winner).join('');
  const totalMargin = dimensionResults.reduce(
    (sum, dimension) => sum + Math.abs(dimension.leftScore - dimension.rightScore),
    0
  );
  const confidence = clamp(55 + totalMargin * 5, 55, 98);
  const explanation = `Your text suggests ${type
    .split('')
    .map((letter) => LETTER_MEANINGS[letter as DimensionLetter])
    .join(', ')}.`;
  const breakdown = dimensionResults.map((dimension) =>
    `${dimension.winner} over ${
      dimension.winner === dimension.left ? dimension.right : dimension.left
    }`
  );

  return {
    type,
    confidence,
    explanation,
    breakdown,
  };
};
