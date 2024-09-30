/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const TermsScreen = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity style={styles.backButtonWrapper} onPress={handleGoBack}>
        <Ionicons name="arrow-back-outline" color={colors.primary} size={25} />
      </TouchableOpacity>
      <Text style={styles.title}>Terms of Use</Text>
      <Text style={styles.text}>
        By accessing and using the Skin Disease Analyzer app, you agree to
        comply with and be bound by these Terms of Use. If you do not agree to
        these terms, please do not use the app.
      </Text>
      <Text style={styles.text}>
        These terms govern your use of the application and any content or
        services provided through it. You are responsible for ensuring that your
        use of the app complies with all applicable laws and regulations.
      </Text>
      <Text style={styles.text}>
        We reserve the right to modify these terms at any time. Please review
        this page periodically for updates. Your continued use of the app after
        modifications constitutes acceptance of the new terms.
      </Text>
      <TouchableOpacity onPress={handleGoBack} style={styles.goBackButton}>
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default TermsScreen;

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
    marginVertical: 10,
  },
  goBackButton: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 10,
    alignItems: 'center',
  },
  goBackButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.Medium,
  },
});
