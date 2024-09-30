/* eslint-disable prettier/prettier */
import {Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const PrivacyScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.backButtonWrapper}
        onPress={handleGoBack}
        accessibilityRole="button"
        accessibilityLabel="Go back">
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Privacy Policy</Text>
      <Text style={styles.text}>
        Welcome to the Skin Disease Analyzer app. Your privacy is important to
        us. This Privacy Policy explains how we collect, use, and protect your
        personal information when you use our app. By using the app, you agree
        to the collection and use of information in accordance with this policy.
      </Text>
      <TouchableOpacity
        onPress={handleGoBack}
        style={styles.goBackButton}
        accessibilityRole="button"
        accessibilityLabel="Go Back">
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    padding: 20,
    alignItems: 'center',
  },
  backButtonWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    textAlign: 'center',
    marginVertical: 20,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.secondary,
    textAlign: 'left',
    lineHeight: 22,
    marginVertical: 10,
  },
  goBackButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
  },
  goBackButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Medium,
    textAlign: 'center',
  },
});
