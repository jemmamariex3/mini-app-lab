import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

type AnalysisResult = {
  score: number;
  verdict: string;
};

const getVerdict = (score: number) => {
  if (score <= 30) {
    return 'Probably harmless';
  }

  if (score <= 60) {
    return 'Hmm... weird energy';
  }

  if (score <= 85) {
    return 'Suspicious behavior';
  }

  return 'Extremely suspicious';
};

export default function App() {
  const [subject, setSubject] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = () => {
    const score = Math.floor(Math.random() * 101);

    setResult({
      score,
      verdict: getVerdict(score),
    });
  };

  const trimmedSubject = subject.trim();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Suspicious Meter</Text>
        <Text style={styles.subtitle}>
          Enter a person, behavior, or situation and let the meter deliver a
          completely unserious suspicion score.
        </Text>

        <TextInput
          value={subject}
          onChangeText={setSubject}
          placeholder="Example: My roommate hiding snacks"
          placeholderTextColor="#7b7b8a"
          style={styles.input}
        />

        <Pressable
          style={[
            styles.button,
            trimmedSubject ? styles.buttonEnabled : styles.buttonDisabled,
          ]}
          onPress={handleAnalyze}
          disabled={!trimmedSubject}
        >
          <Text style={styles.buttonText}>Analyze</Text>
        </Pressable>

        {result ? (
          <View style={styles.resultCard}>
            <Text style={styles.resultLabel}>Analyzed Subject</Text>
            <Text style={styles.resultValue}>{trimmedSubject}</Text>

            <Text style={styles.resultLabel}>Suspicion Score</Text>
            <Text style={styles.score}>{result.score}/100</Text>

            <Text style={styles.resultLabel}>Verdict</Text>
            <Text style={styles.verdict}>{result.verdict}</Text>
          </View>
        ) : (
          <View style={styles.placeholderCard}>
            <Text style={styles.placeholderText}>
              Your extremely scientific results will appear here.
            </Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f1e8',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
    justifyContent: 'center',
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#4b5563',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 14,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: '#111827',
    marginBottom: 16,
  },
  button: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonEnabled: {
    backgroundColor: '#d97706',
  },
  buttonDisabled: {
    backgroundColor: '#f3c98b',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  resultCard: {
    borderRadius: 18,
    padding: 20,
    backgroundColor: '#fffaf3',
    borderWidth: 1,
    borderColor: '#ead8be',
  },
  placeholderCard: {
    borderRadius: 18,
    padding: 20,
    backgroundColor: '#fffaf3',
    borderWidth: 1,
    borderColor: '#ead8be',
  },
  placeholderText: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 15,
    lineHeight: 22,
  },
  resultLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#9a3412',
    marginBottom: 6,
  },
  resultValue: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 18,
  },
  score: {
    fontSize: 42,
    fontWeight: '800',
    color: '#b45309',
    marginBottom: 18,
  },
  verdict: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1f2937',
  },
});
