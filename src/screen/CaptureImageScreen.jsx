/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../utils/colors';
import {fonts} from '../utils/fonts';

const CaptureImageScreen = () => {
  const navigation = useNavigation();
  const [capturedImage, setCapturedImage] = useState(null);

  const handleCaptureImage = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
    };

    launchCamera(options, response => {
      if (response.didCancel) {
        Alert.alert('Camera Cancelled', 'No image captured.');
      } else if (response.errorCode) {
        Alert.alert('Error', response.errorMessage);
      } else {
        const uri = response.assets[0].uri;
        setCapturedImage(uri);
        Alert.alert('Image Captured', 'Image successfully captured!');
      }
    });
  };

  const handleProceed = () => {
    if (capturedImage) {
      navigation.navigate('DIAGNOSIS_RESULT', {image: capturedImage});
    } else {
      Alert.alert('No Image', 'Please capture an image first.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Capture Your Skin Condition</Text>
      <TouchableOpacity
        style={styles.captureButton}
        onPress={handleCaptureImage}>
        <Text style={styles.buttonText}>Open Camera</Text>
      </TouchableOpacity>
      {capturedImage && (
        <Image source={{uri: capturedImage}} style={styles.imagePreview} />
      )}
      <TouchableOpacity
        style={[
          styles.proceedButton,
          {backgroundColor: capturedImage ? colors.primary : colors.secondary},
        ]}
        onPress={handleProceed}>
        <Text style={styles.buttonText}>Proceed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 26,
    fontFamily: fonts.SemiBold,
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  captureButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 5,
  },
  imagePreview: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.secondary,
    overflow: 'hidden',
  },
  proceedButton: {
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: fonts.SemiBold,
    textAlign: 'center',
  },
});

export default CaptureImageScreen;
