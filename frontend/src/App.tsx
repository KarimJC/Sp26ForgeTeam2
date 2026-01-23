import './global.css'; 
import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { testBackend } from './services/config';

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
    <View className="flex-1 bg-white items-center justify-center p-5">
      <Text className="text-3xl font-bold mb-5 text-gray-800">
        NEU Notes Hub
      </Text>
      
      <Text className="text-base mb-5 text-center text-gray-600">
        {message}
      </Text>
      
      <TouchableOpacity 
        className="bg-blue-500 px-6 py-3 rounded-lg active:bg-blue-600"
        onPress={handleTest}
      >
        <Text className="text-white font-semibold text-base">
          Test Backend Connection
        </Text>
      </TouchableOpacity>
      
      <StatusBar style="auto" />
    </View>
  );
}