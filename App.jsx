import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screen/HomeScreen';
import AboutScreen from './src/screen/AboutScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';
import TermsScreen from './src/screen/TermsScreen';
import PrivacyScreen from './src/screen/PrivacyScreen';
import UploadScreen from './src/screen/UploadScreen';
import CaptureImageScreen from './src/screen/CaptureImageScreen';
import DiagnosisResultScreen from './src/screen/DiagnosisResultScreen';
// import HistoryScreen from './src/screen/HistoryScreen';
// import DiseaseScreen from './src/screen/DiseaseScreen';
import SettingsScreen from './src/screen/SettingsScreen';
import SplashScreen from './src/screen/SplashScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="SPLASH">
        <Stack.Screen name={'SPLASH'} component={SplashScreen} />
        <Stack.Screen name={'HOME'} component={HomeScreen} />
        <Stack.Screen name={'ABOUT'} component={AboutScreen} />
        <Stack.Screen name={'LOGIN'} component={LoginScreen} />
        <Stack.Screen name={'SIGNUP'} component={SignupScreen} />
        <Stack.Screen name={'TERMS'} component={TermsScreen} />
        <Stack.Screen name={'PRIVACY'} component={PrivacyScreen} />
        <Stack.Screen name={'UPLOAD'} component={UploadScreen} />
        <Stack.Screen name={'CAPTURE_IMAGE'} component={CaptureImageScreen} />
        <Stack.Screen
          name={'DIAGNOSIS_RESULT'}
          component={DiagnosisResultScreen}
        />
        {/* <Stack.Screen name={'HISTORY'} component={HistoryScreen} />
        <Stack.Screen name={'DISEASE'} component={DiseaseScreen} /> */}
        <Stack.Screen name={'SETTINGS'} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
