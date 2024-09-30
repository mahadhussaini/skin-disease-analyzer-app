/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const SettingsScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('LOGIN');
  };

  const toggleNotifications = () => {
    setNotificationsEnabled(previousState => !previousState);
  };

  const toggleDarkMode = () => {
    setDarkModeEnabled(previousState => !previousState);
    Alert.alert(`Dark Mode ${darkModeEnabled ? 'Disabled' : 'Enabled'}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Enable Notifications</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={toggleNotifications}
          thumbColor={notificationsEnabled ? colors.primary : colors.gray}
        />
      </View>

      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={toggleDarkMode}
          thumbColor={darkModeEnabled ? colors.primary : colors.gray}
        />
      </View>

      <TouchableOpacity
        style={styles.resetButton}
        onPress={() =>
          Alert.alert(
            'Settings Reset',
            'All settings have been reset to default.',
            [{text: 'OK'}],
          )
        }>
        <Text style={styles.resetButtonText}>Reset to Default</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  heading: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 20,
  },
  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    borderRadius: 100,
    padding: 10,
    backgroundColor: colors.primary,
    marginTop: 20,
  },
  logoutButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  settingText: {
    fontSize: 18,
    fontFamily: fonts.Regular,
    color: colors.secondary,
  },
  resetButton: {
    marginTop: 30,
    paddingVertical: 15,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
  },
});

export default SettingsScreen;
