/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
} from 'react-native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {auth} from './Firebase';

// Modify the HomeScreen component to remove 'CAPTURE_IMAGE' from the menu
const HomeScreen = () => {
  const navigation = useNavigation();
  const {width, height} = Dimensions.get('window');
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserName(user.displayName || user.email);
    }
  }, []);

  const navigateTo = screen => {
    navigation.navigate(screen);
    setIsMenuVisible(false);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Modal visible={isMenuVisible} transparent={true} animationType="slide">
        <View style={styles.sidebar}>
          <Text style={styles.menuTitle}>Menu</Text>
          {['ABOUT', 'TERMS', 'PRIVACY', 'UPLOAD', 'SETTINGS'].map(screen => (
            <TouchableOpacity
              key={screen}
              style={styles.menuButton}
              onPress={() => navigateTo(screen)}
              accessibilityRole="button"
              accessibilityLabel={`Navigate to ${screen
                .replace('_', ' ')
                .toLowerCase()}`}>
              <Text style={styles.menuButtonText}>
                {screen.replace('_', ' ')}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
            <Text style={styles.closeButtonText}>Close Menu</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  logo: {
    marginVertical: 30,
  },
  bannerImage: {
    marginVertical: 20,
  },
  title: {
    fontSize: 40,
    fontFamily: fonts.SemiBold,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.primary,
    marginTop: 40,
  },
  subTitle: {
    fontSize: 18,
    paddingHorizontal: 20,
    textAlign: 'center',
    color: colors.secondary,
    fontFamily: fonts.Medium,
    marginVertical: 20,
  },
  welcomeContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: colors.lightGray,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: fonts.Bold,
    color: colors.primary,
  },
  welcomeDescription: {
    fontSize: 16,
    color: colors.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
  sidebar: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    width: '80%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    elevation: 10,
  },
  menuTitle: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 20,
  },
  menuButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
  },
  menuButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    backgroundColor: colors.primary,
  },
  closeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
  },
});
