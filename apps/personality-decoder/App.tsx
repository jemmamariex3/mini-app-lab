import { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {
  analyzePersonalityFromText,
  type PersonalityAnalysisResult,
} from './utils/analyzePersonalityFromText';

export default function App() {
  const [description, setDescription] = useState('');
  const [result, setResult] = useState<PersonalityAnalysisResult | null>(null);

  const handleAnalyze = () => {
    setResult(analyzePersonalityFromText(description));
  };

  const trimmedDescription = description.trim();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Text style={styles.title}>Personality Decoder</Text>
          <Text style={styles.subtitle}>
            Describe yourself, how you think, and how you interact with people.
          </Text>

          <TextInput
            multiline
            value={description}
            onChangeText={setDescription}
            placeholder="Example: I enjoy deep conversations, planning ahead, and thinking about big future possibilities."
            placeholderTextColor="#7b7b8a"
            style={styles.input}
            textAlignVertical="top"
          />

          <Pressable
            style={[
              styles.button,
              trimmedDescription ? styles.buttonEnabled : styles.buttonDisabled,
            ]}
            onPress={handleAnalyze}
            disabled={!trimmedDescription}
          >
            <Text style={styles.buttonText}>Analyze</Text>
          </Pressable>

          {result ? (
            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Predicted Type</Text>
              <Text style={styles.typeValue}>{result.type}</Text>

              <Text style={styles.resultLabel}>Confidence</Text>
              <Text style={styles.confidenceValue}>{result.confidence}%</Text>

              <Text style={styles.resultLabel}>Why</Text>
              <Text style={styles.bodyText}>{result.explanation}</Text>

              <Text style={styles.resultLabel}>Breakdown</Text>
              {result.breakdown.map((item) => (
                <Text key={item} style={styles.breakdownItem}>
                  - {item}
                </Text>
              ))}
            </View>
          ) : (
            <View style={styles.placeholderCard}>
              <Text style={styles.placeholderText}>
                Your four-letter personality prediction will appear here.
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#eef4f1',
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
    fontWeight: '700',
    color: '#183b32',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: '#45625b',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    minHeight: 160,
    borderWidth: 1,
    borderColor: '#c8d7d1',
    borderRadius: 16,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: '#102a24',
    marginBottom: 16,
  },
  button: {
    borderRadius: 14,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 24,
  },
  buttonEnabled: {
    backgroundColor: '#1f7a67',
  },
  buttonDisabled: {
    backgroundColor: '#9ac7bc',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  resultCard: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fbfffd',
    borderWidth: 1,
    borderColor: '#d5e4df',
  },
  placeholderCard: {
    borderRadius: 20,
    padding: 20,
    backgroundColor: '#fbfffd',
    borderWidth: 1,
    borderColor: '#d5e4df',
  },
  placeholderText: {
    textAlign: 'center',
    color: '#648078',
    fontSize: 15,
    lineHeight: 22,
  },
  resultLabel: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: '#1f7a67',
    marginBottom: 6,
  },
  typeValue: {
    fontSize: 42,
    fontWeight: '800',
    color: '#183b32',
    marginBottom: 18,
  },
  confidenceValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#24584c',
    marginBottom: 18,
  },
  bodyText: {
    fontSize: 17,
    lineHeight: 24,
    color: '#203731',
    marginBottom: 18,
  },
  breakdownItem: {
    fontSize: 16,
    lineHeight: 22,
    color: '#2d4b43',
    marginBottom: 6,
  },
});
