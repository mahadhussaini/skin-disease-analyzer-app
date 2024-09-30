/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {colors} from '../utils/colors';
import {auth} from './Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {width, height} = Dimensions.get('window');

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Validation Error', 'Please fill in all fields.');
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        Alert.alert('Login successful.');
        navigation.navigate('HOME');
      })
      .catch(error => {
        Alert.alert(
          'Login failed',
          error.message || 'Invalid email or password.',
        );
      });
  };

  const handleCreateAccount = () => {
    navigation.navigate('SIGNUP');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo-white.png')}
        style={[styles.logo, {height: height * 0.07, width: width * 0.4}]}
        accessibilityLabel="App logo"
      />
      <Text style={styles.introText}>
        Welcome to the Skin Disease Analyzer app! Log in to access instant skin
        disease detection and personalized treatment recommendations tailored
        just for you.
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>
            Don't have an account?{' '}
            <Text style={styles.signUpLink} onPress={handleCreateAccount}>
              Sign Up
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
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  signUpText: {
    color: '#00008B',
    fontSize: 16,
  },
  signUpLink: {
    color: '#00008B',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
