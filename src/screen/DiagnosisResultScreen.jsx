/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {colors} from '../utils/colors';

const DiagnosisResultScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {image} = route.params;

  const [isAIModelReady, setIsAIModelReady] = useState(false);

  const possibleConditions = [
    {
      condition: 'Acne',
      suggestion: 'Consider using salicylic acid or benzoyl peroxide.',
    },
    {
      condition: 'Eczema',
      suggestion: 'Use moisturizing creams and avoid irritants.',
    },
    {
      condition: 'Psoriasis',
      suggestion: 'Topical treatments or phototherapy may help.',
    },
    {
      condition: 'Rosacea',
      suggestion: 'Consult a dermatologist for prescription medications.',
    },
    {
      condition: 'Contact Dermatitis',
      suggestion:
        'Identify and avoid the irritant or allergen; consider topical steroids.',
    },
    {
      condition: 'Fungal Infection',
      suggestion:
        'Use antifungal creams or consult a doctor for oral medications.',
    },
    {
      condition: 'Hyperpigmentation',
      suggestion: 'Consider using vitamin C serum or retinoids.',
    },
    {
      condition: 'Warts',
      suggestion:
        'Over-the-counter treatments or cryotherapy may be effective.',
    },
    {
      condition: 'Skin Tag',
      suggestion:
        'Generally harmless, but can be removed by a dermatologist if desired.',
    },
    {
      condition: 'Seborrheic Dermatitis',
      suggestion: 'Use medicated shampoos and topical antifungal treatments.',
    },
  ];

  const handleGoBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAIModelReady(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Diagnosis Result</Text>

        <Image source={{uri: image}} style={styles.imagePreview} />

        <Text style={styles.resultText}>Possible skin conditions:</Text>

        {isAIModelReady ? (
          possibleConditions.map((item, index) => (
            <View key={index} style={styles.conditionContainer}>
              <Text style={styles.conditionText}>{item.condition}</Text>
              <Text style={styles.suggestionText}>{item.suggestion}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.loadingText}>Loading predictions...</Text>
        )}

        <TouchableOpacity style={styles.goBackButton} onPress={handleGoBack}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DiagnosisResultScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  imagePreview: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 20,
  },
  resultText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333333',
  },
  conditionContainer: {
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
  conditionText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  suggestionText: {
    fontSize: 16,
    color: '#555555',
  },
  loadingText: {
    fontSize: 16,
    color: '#777777',
    textAlign: 'center',
    marginVertical: 10,
  },
  goBackButton: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
