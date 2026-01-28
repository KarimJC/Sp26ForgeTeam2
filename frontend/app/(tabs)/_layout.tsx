import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,  // Hide header (AppLayout has its own)
        tabBarStyle: {
          display: 'none',   // Hide default tabs (using custom BottomNav)
        },
      }}
    />
  );
}