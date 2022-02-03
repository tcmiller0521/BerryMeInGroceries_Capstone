import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginPage from './components/Authenication/Login/LoginPage';
import RegisterPage from './components/Authenication/Registration/RegisterPage';
import Homepage from './components/Homepage/Homepage';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginPage}  />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Homepage" component={Homepage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
