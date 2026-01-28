import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/icon-symbol';

interface BottomNavProps {
  onNavigate: (route: string) => void;
  onPressAdd: () => void;
  activeRoute?: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ 
  onNavigate, 
  onPressAdd,
  activeRoute = 'home'
}) => {
  return (
    <View style={styles.bottomNav}>
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onNavigate('home')}
      >
        <IconSymbol 
          name={activeRoute === 'home' ? 'house.fill' : 'house'} 
          size={28} 
          color="#000" 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onNavigate('notes')}
      >
        <IconSymbol 
          name={activeRoute === 'notes' ? 'folder.fill' : 'folder'} 
          size={28} 
          color="#000" 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.addButton}
        onPress={onPressAdd}
      >
        <IconSymbol 
          name="plus" 
          size={32} 
          color="#fff" 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onNavigate('chat')}
      >
        <IconSymbol 
          name={activeRoute === 'chat' ? 'message.fill' : 'message'} 
          size={28} 
          color="#000" 
        />
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.navButton}
        onPress={() => onNavigate('profile')}
      >
        <IconSymbol 
          name={activeRoute === 'profile' ? 'person.fill' : 'person'} 
          size={28} 
          color="#000" 
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 15,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navButton: {
    padding: 10,
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: '#6B4CE6',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6B4CE6',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default BottomNav;
