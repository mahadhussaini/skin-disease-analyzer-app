/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const UploadScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleUploadImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        Alert.alert('Image Selection Cancelled', 'No image was selected.');
      } else if (response.errorCode) {
        setErrorMessage(response.errorMessage || 'An unknown error occurred.');
      } else if (response.assets && response.assets.length > 0) {
        const uri = response.assets[0].uri;
        setSelectedImage(uri);
        setErrorMessage('');
        Alert.alert('Image Selected', 'Image successfully selected!');
      } else {
        setErrorMessage('Failed to select an image. Please try again.');
      }
    });
  };

  const handleViewResult = () => {
    if (selectedImage) {
      navigation.navigate('DIAGNOSIS_RESULT', {image: selectedImage});
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setErrorMessage('');
  };

  const handleCaptureImage = () => {
    navigation.navigate('CAPTURE_IMAGE');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
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

      <View style={styles.container}>
        <Text style={styles.heading}>
          Identify Your Skin Condition With Artificial Intelligence
        </Text>
        <Text style={styles.subHeading}>
          Upload a Photo to Instantly Learn What Your Condition is and how to
          Treat it
        </Text>

        <Image
          source={require('../assets/first.png')}
          style={styles.bannerImage}
        />
        <Text style={styles.subHeading}>
          It's as Simple as Uploading a Photo
        </Text>

        <Image
          source={require('../assets/instruction.jpg')}
          style={styles.bannerImage}
        />
        <Text style={styles.subHeading}>
          Follow our Instructions to Upload a Photo of a Skin Problem
        </Text>

        <Image
          source={require('../assets/sec.png')}
          style={styles.bannerImage}
        />
        <Text style={styles.subHeading}>We'll Analyze the Photo</Text>
        <Text style={styles.subTitle}>
          Our advanced AI, developed by leading experts, will instantly provide
          a preliminary diagnosis and general precautions.
        </Text>

        <Image
          source={require('../assets/third.png')}
          style={styles.bannerImage}
        />
        <Text style={styles.subHeading}>Get Answers Instantly</Text>
        <Text style={styles.subTitle}>
          We provide you with an accurate list of possible skin conditions and
          recommended precautions.
        </Text>

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleUploadImage}>
          <Text style={styles.uploadButtonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.captureButton}
          onPress={handleCaptureImage}>
          <Text style={styles.uploadButtonText}>Capture Image</Text>
        </TouchableOpacity>

        {selectedImage && (
          <Image source={{uri: selectedImage}} style={styles.selectedImage} />
        )}
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

        {selectedImage && (
          <>
            <TouchableOpacity
              style={styles.resultButton}
              onPress={handleViewResult}>
              <Text style={styles.resultButtonText}>View Result</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={handleRemoveImage}>
              <Text style={styles.removeButtonText}>Remove Image</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default UploadScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingVertical: 20,
  },
  backButtonWrapper: {
    alignSelf: 'flex-start',
    marginBottom: 15,
    paddingHorizontal: 20,
  },
  container: {
    padding: 20,
    width: '100%',
  },
  heading: {
    fontSize: 24,
    fontFamily: fonts.Bold,
    color: colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 16,
    fontFamily: fonts.Regular,
    color: colors.primary,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: fonts.Light,
    color: colors.secondary,
    marginBottom: 20,
    textAlign: 'center',
  },
  bannerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15,
  },
  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 100,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    marginTop: 20,
    marginBottom: 20,
  },
  uploadButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  captureButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 100,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    marginTop: 20,
    marginBottom: 20,
  },
  captureButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
  resultButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 100,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    marginTop: 20,
    marginBottom: 10,
  },
  resultButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
  removeButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    borderRadius: 100,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    marginTop: 10,
  },
  removeButtonText: {
    color: colors.white,
    fontSize: 18,
    fontFamily: fonts.SemiBold,
  },
});
