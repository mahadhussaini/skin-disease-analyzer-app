/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const AboutScreen = () => {
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
        accessibilityLabel="Go back to the previous screen">
        <Ionicons
          name={'arrow-back-outline'}
          color={colors.primary}
          size={25}
        />
      </TouchableOpacity>
      <Image
        source={require('../assets/about.png')}
        style={styles.bannerImage}
        accessibilityLabel="Banner image for Skin Disease Analyzer"
        onError={e => console.log('Error loading image')}
      />
      <Text
        style={styles.title}
        accessibilityLabel="About Skin Disease Analyzer Title"
        allowFontScaling>
        About Skin Disease Analyzer
      </Text>
      <Text
        style={styles.subTitle}
        accessibilityLabel="About Skin Disease Analyzer Description"
        allowFontScaling>
        Skin Disease Analyzer is an AI-powered tool designed to detect skin
        diseases instantly. Our mission is to make skin health accessible and
        affordable for everyone, anywhere in the world.
      </Text>

      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Our Features:</Text>
        <Text style={styles.featureText}>✔️ Instant Diagnosis</Text>
        <Text style={styles.featureText}>✔️ User-friendly Interface</Text>
        <Text style={styles.featureText}>✔️ Secure Data Handling</Text>
        <Text style={styles.featureText}>✔️ Personalized Health Insights</Text>

        <Text style={styles.headerText}>How It Works:</Text>
        <Text style={styles.featureText}>
          1. Capture an image of the affected area using your device.
        </Text>
        <Text style={styles.featureText}>
          2. Our AI analyzes the image and provides an instant diagnosis.
        </Text>
        <Text style={styles.featureText}>
          3. Get recommendations for further actions or treatment.
        </Text>
      </View>

      <Text
        style={styles.subTitle}
        accessibilityLabel="Skin Disease Analyzer AI Technology"
        allowFontScaling>
        This app leverages advanced AI technology to provide accurate and
        instant diagnoses, helping you take the necessary steps toward treatment
        and care.
      </Text>

      <TouchableOpacity
        onPress={handleGoBack}
        style={styles.goBackButton}
        activeOpacity={0.7}
        accessibilityRole="button">
        <Text style={styles.goBackButtonText}>Go Back</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    padding: 20,
  },
  backButtonWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  bannerImage: {
    marginVertical: 20,
    height: 250,
    width: 250,
    borderRadius: 15,
    overflow: 'hidden',
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    textAlign: 'center',
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: fonts.Medium,
    color: colors.secondary,
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 24,
  },
  contentContainer: {
    marginVertical: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
  },
  headerText: {
    fontSize: 22,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 10,
  },
  featureText: {
    fontSize: 16,
    fontFamily: fonts.Medium,
    color: colors.secondary,
    marginVertical: 5,
    lineHeight: 20,
  },
  goBackButton: {
    marginTop: 40,
    paddingVertical: 12,
    paddingHorizontal: 30,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  goBackButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.Medium,
  },
});
