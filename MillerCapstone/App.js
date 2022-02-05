import React from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginPage from './components/Authenication/Login/LoginPage';
import RegisterPage from './components/Authenication/Registration/RegisterPage';
import Homepage from './components/Homepage/Homepage';
import BudgetPage from './components/Budget/BudgetPage';
import ListPage from './components/Lists/ListPage';
import WalletPage from './components/Wallet/WalletPage';
import UserProfile from './components/UserProfile/UserProfile';
import StoresPage from './components/MyStores/StoresPage';
import UserSettings from './components/UserSettings.js/UserSettingsPage';


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Login" component={LoginPage}  />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Budget" component={BudgetPage} />
        <Stack.Screen name="Lists" component={ListPage} />
        <Stack.Screen name="Wallet" component={WalletPage} />
        <Stack.Screen name="Profile" component={UserProfile} />
        <Stack.Screen name="Stores" component={StoresPage} />
        <Stack.Screen name="Settings" component={UserSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
