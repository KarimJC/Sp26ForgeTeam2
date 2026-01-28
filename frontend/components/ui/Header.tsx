import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface HeaderProps {
  userName: string;
  profileImage?: any;
  onProfilePress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  userName, 
  profileImage,
  onProfilePress 
}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.logo}>
        Brain<Text style={styles.logoAccent}>Bank</Text>
      </Text>
      <TouchableOpacity 
        style={styles.profileButton}
        onPress={onProfilePress}
      >
        <Image
          source={profileImage || { uri: 'https://via.placeholder.com/40' }}
          style={styles.profileImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  logoAccent: {
    color: '#6B4CE6',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;