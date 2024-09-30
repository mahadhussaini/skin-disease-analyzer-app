// /* eslint-disable prettier/prettier */
// import React from 'react';
// import {Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {colors} from '../utils/colors';
// import {fonts} from '../utils/fonts';

// const DiseaseScreen = () => {
//   const navigation = useNavigation();

//   const handleGoBack = () => {
//     navigation.goBack();
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.title}>Diagnosis Details</Text>

//       <Text style={styles.resultText}>Diagnosis: Acne</Text>
//       <Text style={styles.detailText}>Recommended Treatment:</Text>
//       <Text style={styles.detailText}>1. Clean the affected area daily.</Text>
//       <Text style={styles.detailText}>2. Use non-comedogenic products.</Text>
//       <Text style={styles.detailText}>
//         3. Consult a dermatologist for severe cases.
//       </Text>
//       <Text style={styles.detailText}>
//         4. Apply topical retinoids to promote skin cell turnover.
//       </Text>
//       <Text style={styles.detailText}>
//         5. Consider oral antibiotics for inflammation.
//       </Text>
//       <Text style={styles.detailText}>
//         6. Use benzoyl peroxide to reduce bacteria on the skin.
//       </Text>

//       <Text style={styles.resultText}>Diagnosis: Eczema</Text>
//       <Text style={styles.detailText}>Recommended Treatment:</Text>
//       <Text style={styles.detailText}>
//         1. Use moisturizing creams to hydrate the skin.
//       </Text>
//       <Text style={styles.detailText}>2. Avoid irritants and allergens.</Text>
//       <Text style={styles.detailText}>
//         3. Use topical corticosteroids for inflammation.
//       </Text>
//       <Text style={styles.detailText}>
//         4. Consider antihistamines for itching.
//       </Text>

//       <Text style={styles.resultText}>Diagnosis: Psoriasis</Text>
//       <Text style={styles.detailText}>Recommended Treatment:</Text>
//       <Text style={styles.detailText}>
//         1. Use topical treatments like corticosteroids.
//       </Text>
//       <Text style={styles.detailText}>
//         2. Consider phototherapy for severe cases.
//       </Text>
//       <Text style={styles.detailText}>
//         3. Follow a healthy diet and manage stress.
//       </Text>

//       <Text style={styles.resultText}>Diagnosis: Rosacea</Text>
//       <Text style={styles.detailText}>Recommended Treatment:</Text>
//       <Text style={styles.detailText}>
//         1. Avoid triggers such as spicy foods and hot drinks.
//       </Text>
//       <Text style={styles.detailText}>2. Use gentle skincare products.</Text>
//       <Text style={styles.detailText}>
//         3. Consult a dermatologist for prescription medications.
//       </Text>

//       <Text style={styles.resultText}>Diagnosis: Contact Dermatitis</Text>
//       <Text style={styles.detailText}>Recommended Treatment:</Text>
//       <Text style={styles.detailText}>
//         1. Identify and avoid the irritant or allergen.
//       </Text>
//       <Text style={styles.detailText}>
//         2. Use topical corticosteroids to reduce inflammation.
//       </Text>
//       <Text style={styles.detailText}>
//         3. Keep the affected area clean and moisturized.
//       </Text>

//       <Text style={styles.detailText}>General Care Tips:</Text>
//       <Text style={styles.detailText}>
//         1. Avoid touching your face with unwashed hands.
//       </Text>
//       <Text style={styles.detailText}>
//         2. Stay hydrated and maintain a balanced diet.
//       </Text>
//       <Text style={styles.detailText}>
//         3. Manage stress through relaxation techniques.
//       </Text>

//       <TouchableOpacity
//         style={styles.goBackButton}
//         onPress={handleGoBack}
//         accessibilityRole="button"
//         accessibilityLabel="Go back to the previous screen">
//         <Text style={styles.buttonText}>Go Back</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: colors.white,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontFamily: fonts.Bold,
//     color: colors.primary,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   resultText: {
//     fontSize: 20,
//     fontFamily: fonts.SemiBold,
//     color: colors.primary,
//     marginBottom: 10,
//   },
//   detailText: {
//     fontSize: 16,
//     fontFamily: fonts.Regular,
//     color: colors.secondary,
//     marginVertical: 5,
//   },
//   goBackButton: {
//     backgroundColor: colors.primary,
//     padding: 10,
//     borderRadius: 10,
//     marginTop: 20,
//   },
//   buttonText: {
//     color: colors.white,
//     fontSize: 16,
//     fontFamily: fonts.SemiBold,
//     textAlign: 'center',
//   },
// });

// export default DiseaseScreen;
