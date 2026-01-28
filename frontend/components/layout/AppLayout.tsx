import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../ui/Header';
import BottomNav from '../ui/BottomNav';
import ActionMenu from '../ui/ActionMenu';

interface AppLayoutProps {
  children: React.ReactNode;
  userName?: string;
  profileImage?: any;
  onNavigate?: (route: string) => void;
  activeRoute?: string;
}

const AppLayout: React.FC<AppLayoutProps> = ({ 
  children, 
  userName = "User", 
  profileImage,
  onNavigate,
  activeRoute = 'home'
}) => {
  const [showActionMenu, setShowActionMenu] = useState(false);

  const handleAction = (action: string) => {
    console.log(`Action selected: ${action}`);
    setShowActionMenu(false);
    if (onNavigate) {
      onNavigate(action);
    }
  };

  const handleNavigation = (route: string) => {
    if (onNavigate) {
      onNavigate(route);
    }
  };

  return (
    <View style={styles.container}>
      <Header userName={userName} profileImage={profileImage} />
      
      <View style={styles.content}>
        {children}
      </View>

      <ActionMenu 
        visible={showActionMenu}
        onClose={() => setShowActionMenu(false)}
        onAction={handleAction}
      />

      <BottomNav 
        onNavigate={handleNavigation}
        onPressAdd={() => setShowActionMenu(true)}
        activeRoute={activeRoute}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default AppLayout;