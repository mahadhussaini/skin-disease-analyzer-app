// /* eslint-disable prettier/prettier */
// import React from 'react';
// import {View, Text, StyleSheet, FlatList} from 'react-native';
// import {colors} from '../utils/colors';
// import {fonts} from '../utils/fonts';

// const sampleHistory = [
//   {
//     id: '1',
//     date: '2024-09-20',
//     diagnosis: 'Acne',
//     notes: 'Mild acne treatment suggested.',
//   },
//   {
//     id: '2',
//     date: '2024-09-18',
//     diagnosis: 'Eczema',
//     notes: 'Moisturizing creams recommended.',
//   },
//   {
//     id: '3',
//     date: '2024-09-15',
//     diagnosis: 'Psoriasis',
//     notes: 'Consider a dermatologist consultation.',
//   },
//   {
//     id: '4',
//     date: '2024-09-10',
//     diagnosis: 'Rosacea',
//     notes: 'Use gentle skin care products and sun protection.',
//   },
//   {
//     id: '5',
//     date: '2024-09-05',
//     diagnosis: 'Contact Dermatitis',
//     notes: 'Identify irritants and consider topical steroids.',
//   },
//   {
//     id: '6',
//     date: '2024-09-01',
//     diagnosis: 'Seborrheic Dermatitis',
//     notes: 'Use medicated shampoo and anti-fungal cream.',
//   },
//   {
//     id: '7',
//     date: '2024-08-28',
//     diagnosis: 'Warts',
//     notes: 'Cryotherapy or topical treatments suggested.',
//   },
//   {
//     id: '8',
//     date: '2024-08-20',
//     diagnosis: 'Vitiligo',
//     notes: 'Consult a dermatologist for possible treatments.',
//   },
//   {
//     id: '9',
//     date: '2024-08-15',
//     diagnosis: 'Folliculitis',
//     notes: 'Keep the area clean and avoid tight clothing.',
//   },
//   {
//     id: '10',
//     date: '2024-08-10',
//     diagnosis: 'Impetigo',
//     notes: 'Antibiotic treatment recommended; keep area clean.',
//   },
// ];

// const HistoryScreen = () => {
//   const renderItem = ({item}) => (
//     <View style={styles.itemContainer}>
//       <Text style={styles.itemDate}>{item.date}</Text>
//       <Text style={styles.itemDiagnosis}>{item.diagnosis}</Text>
//       <Text style={styles.itemNotes}>{item.notes}</Text>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Diagnosis History</Text>
//       <FlatList
//         data={sampleHistory}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.white,
//     padding: 20,
//   },
//   title: {
//     fontSize: 26,
//     fontFamily: fonts.Bold,
//     color: colors.primary,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   itemContainer: {
//     padding: 15,
//     borderBottomWidth: 1,
//     borderColor: colors.lightGray,
//     borderRadius: 8,
//     marginBottom: 10,
//     backgroundColor: colors.lightBackground, // Optional: for better contrast
//   },
//   itemDate: {
//     fontSize: 16,
//     fontFamily: fonts.Regular,
//     color: colors.secondary,
//   },
//   itemDiagnosis: {
//     fontSize: 18,
//     fontFamily: fonts.SemiBold,
//     color: colors.primary,
//   },
//   itemNotes: {
//     fontSize: 14,
//     fontFamily: fonts.Regular,
//     color: colors.darkGray,
//     marginTop: 5,
//   },
// });

// export default HistoryScreen;
