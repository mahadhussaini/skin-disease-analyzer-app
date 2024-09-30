/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {colors} from '../utils/colors';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './Firebase';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {width, height} = Dimensions.get('window');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Validation Error', 'Please enter both email and password.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      Alert.alert('Validation Error', 'Please enter a valid email address.');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert(
          'Registration successful!',
          'Your account has been created!',
        );
        navigation.navigate('LOGIN');
      })
      .catch(error => {
        setError(error.message);
      });
  };

  const handleBack = () => {
    navigation.navigate('LOGIN');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-white.png')}
        style={[styles.logo, {height: height * 0.07, width: width * 0.4}]}
        accessibilityLabel="App logo"
      />
      <Text style={styles.introText}>
        Join our community for personalized skin disease analysis and
        recommendations. Sign up now to access AI-driven insights and take
        control of your skin health!
      </Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholderTextColor="#FFF"
          color="#FFF"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholderTextColor="#FFF"
          color="#FFF"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleSignUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>
            Already have an account?{' '}
            <Text style={styles.signInLink} onPress={handleBack}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4682B4',
    paddingVertical: 20,
  },
  logo: {
    marginVertical: 30,
  },
  introText: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#00008B',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 15,
    height: 50,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
  },
  button: {
    backgroundColor: '#00008B',
    paddingVertical: 15,
    borderRadius: 25,
    marginVertical: 10,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  signInContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  signInText: {
    color: '#00008B',
    textAlign: 'center',
    fontSize: 16,
  },
  signInLink: {
    color: '#00008B',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default SignUpScreen;
