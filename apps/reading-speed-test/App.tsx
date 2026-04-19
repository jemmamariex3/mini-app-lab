import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { passages, type Passage } from './src/data/passages';

type Step =
  | 'intro'
  | 'reading'
  | 'question-1'
  | 'question-2'
  | 'question-3'
  | 'results';

type TestResult = {
  readingSeconds: number;
  wpm: number;
  correctAnswers: number;
  comprehensionPercent: number;
};

const QUESTION_STEPS: Step[] = ['question-1', 'question-2', 'question-3'];

const formatSeconds = (seconds: number) => `${seconds.toFixed(1)} seconds`;

export default function App() {
  const [step, setStep] = useState<Step>('intro');
  const [selectedPassage, setSelectedPassage] = useState<Passage | null>(null);
  const [readingStartTime, setReadingStartTime] = useState<number | null>(null);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<TestResult | null>(null);

  const startTest = () => {
    const nextPassage =
      passages[Math.floor(Math.random() * passages.length)];

    setSelectedPassage(nextPassage);
    setAnswers([]);
    setResult(null);
    setReadingStartTime(Date.now());
    setStep('reading');
  };

  const finishReading = () => {
    if (!selectedPassage || readingStartTime === null) {
      return;
    }

    const readingSeconds = Math.max((Date.now() - readingStartTime) / 1000, 1);
    const wpm = Math.round((selectedPassage.wordCount / readingSeconds) * 60);

    setResult({
      readingSeconds,
      wpm,
      correctAnswers: 0,
      comprehensionPercent: 0,
    });
    setStep('question-1');
  };

  const handleAnswer = (answer: string) => {
    if (!selectedPassage || !result) {
      return;
    }

    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);

    if (nextAnswers.length < selectedPassage.questions.length) {
      setStep(QUESTION_STEPS[nextAnswers.length]);
      return;
    }

    const correctAnswers = selectedPassage.questions.filter(
      (question, index) => question.correctAnswer === nextAnswers[index]
    ).length;
    const comprehensionPercent = Math.round(
      (correctAnswers / selectedPassage.questions.length) * 100
    );

    setResult({
      ...result,
      correctAnswers,
      comprehensionPercent,
    });
    setStep('results');
  };

  const restartTest = () => {
    setStep('intro');
    setSelectedPassage(null);
    setReadingStartTime(null);
    setAnswers([]);
    setResult(null);
  };

  const currentQuestionIndex =
    step === 'question-1'
      ? 0
      : step === 'question-2'
        ? 1
        : step === 'question-3'
          ? 2
          : -1;
  const currentQuestion =
    selectedPassage && currentQuestionIndex >= 0
      ? selectedPassage.questions[currentQuestionIndex]
      : null;

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Reading Speed Test</Text>

          {step === 'intro' ? (
            <View style={styles.card}>
              <Text style={styles.subtitle}>
                Test your reading pace and comprehension with one short passage
                and three multiple-choice questions.
              </Text>
              <View style={styles.infoBlock}>
                <Text style={styles.infoText}>
                  1. Read the passage carefully.
                </Text>
                <Text style={styles.infoText}>
                  2. Tap Finish Reading when you are done.
                </Text>
                <Text style={styles.infoText}>
                  3. Answer three comprehension questions.
                </Text>
                <Text style={styles.infoText}>
                  4. Review your reading speed and comprehension results.
                </Text>
              </View>
              <Pressable style={styles.button} onPress={startTest}>
                <Text style={styles.buttonText}>Start Test</Text>
              </Pressable>
            </View>
          ) : null}

          {step === 'reading' && selectedPassage ? (
            <View style={styles.card}>
              <Text style={styles.sectionLabel}>Reading Passage</Text>
              <Text style={styles.passageTitle}>{selectedPassage.title}</Text>
              <Text style={styles.metaText}>
                Word count: {selectedPassage.wordCount}
              </Text>
              <Text style={styles.passageText}>{selectedPassage.text}</Text>
              <Pressable style={styles.button} onPress={finishReading}>
                <Text style={styles.buttonText}>Finish Reading</Text>
              </Pressable>
            </View>
          ) : null}

          {currentQuestion && selectedPassage ? (
            <View style={styles.card}>
              <Text style={styles.sectionLabel}>
                Question {currentQuestionIndex + 1} of{' '}
                {selectedPassage.questions.length}
              </Text>
              <Text style={styles.questionText}>{currentQuestion.question}</Text>
              {currentQuestion.options.map((option) => (
                <Pressable
                  key={option}
                  style={styles.optionButton}
                  onPress={() => handleAnswer(option)}
                >
                  <Text style={styles.optionText}>{option}</Text>
                </Pressable>
              ))}
            </View>
          ) : null}

          {step === 'results' && result && selectedPassage ? (
            <View style={styles.card}>
              <Text style={styles.sectionLabel}>Results</Text>
              <Text style={styles.resultValue}>{result.wpm} WPM</Text>
              <Text style={styles.resultText}>
                Reading time: {formatSeconds(result.readingSeconds)}
              </Text>
              <Text style={styles.resultText}>
                Comprehension: {result.correctAnswers}/
                {selectedPassage.questions.length} correct (
                {result.comprehensionPercent}%)
              </Text>
              <Text style={styles.summaryText}>
                You finished reading "{selectedPassage.title}" and completed the
                comprehension check in one smooth test flow.
              </Text>
              <Pressable style={styles.button} onPress={restartTest}>
                <Text style={styles.buttonText}>Try Another Passage</Text>
              </Pressable>
            </View>
          ) : null}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f3f4ff',
  },
  scrollContent: {
    flexGrow: 1,
  },
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: '#1f2554',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 22,
    borderWidth: 1,
    borderColor: '#d9dcf7',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#42486e',
    marginBottom: 18,
    textAlign: 'center',
  },
  infoBlock: {
    gap: 10,
    marginBottom: 22,
  },
  infoText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#364062',
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#5a62b5',
    marginBottom: 8,
  },
  passageTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1f2554',
    marginBottom: 8,
  },
  metaText: {
    fontSize: 14,
    color: '#667099',
    marginBottom: 16,
  },
  passageText: {
    fontSize: 17,
    lineHeight: 27,
    color: '#28304f',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#4a56c8',
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  questionText: {
    fontSize: 21,
    lineHeight: 30,
    color: '#222a52',
    marginBottom: 18,
  },
  optionButton: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#d9dcf7',
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 12,
    backgroundColor: '#f8f9ff',
  },
  optionText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#313a66',
  },
  resultValue: {
    fontSize: 40,
    fontWeight: '800',
    color: '#1f2554',
    marginBottom: 14,
  },
  resultText: {
    fontSize: 17,
    lineHeight: 24,
    color: '#313a66',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4a4f73',
    marginTop: 8,
    marginBottom: 22,
  },
});
