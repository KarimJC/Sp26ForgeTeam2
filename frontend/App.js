import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import { testBackend } from './api/config';

export default function App() {
  const [message, setMessage] = useState('Press button to test backend');

  const handleTest = async () => {
    const result = await testBackend();
    if (result) {
      setMessage(`Backend says: ${result.message}`);
    } else {
      setMessage('Failed to connect to backend');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEU Notes Hub</Text>
      <Text style={styles.message}>{message}</Text>
      <Button title="Test Backend Connection" onPress={handleTest} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});