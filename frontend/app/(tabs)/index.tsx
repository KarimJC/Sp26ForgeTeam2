import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AppLayout from '@/components/layout/AppLayout';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  const handleNavigation = (route: string) => {
    console.log(`Navigating to: ${route}`);
    
    // Handle navigation based on route
    if (route === 'home') {
      router.push('/(tabs)');
    } else if (route === 'notes') {
      router.push('/(tabs)/notes');
    } else if (route === 'chat') {
      router.push('/(tabs)/chat');
    } else if (route === 'profile') {
      router.push('/(tabs)/profile');
    } else if (route === 'add-class') {
      // Handle add class action
      console.log('Add class clicked');
    } else if (route === 'upload-notes') {
      // Handle upload notes action
      console.log('Upload notes clicked');
    } else if (route === 'generate-document') {
      // Handle generate document action
      console.log('Generate document clicked');
    }
  };

  // Mock class data
  const classes = [
    { id: '1', code: 'CS 2510', description: 'This is a short description of the class.' },
    { id: '2', code: 'MATH 1201', description: 'This is a short description of the class.' },
    { id: '3', code: 'ENVR 1400', description: 'This is a short description of the class.' },
  ];

  return (
    <AppLayout 
      userName="User" 
      onNavigate={handleNavigation}
      activeRoute="home"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome, <Text style={styles.userName}>User!</Text>
          </Text>
        </View>
      </ScrollView>
    </AppLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  userName: {
    color: '#6B4CE6',
  },
});
