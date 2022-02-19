import React, { useEffect, useState } from 'react';
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
import ItemPage from './components/GroceryLists/ItemPage';
import CardPage from './components/MyStores/CardPage';
import { useDispatch } from 'react-redux';
import { retrieveLists } from './actions/lists';


const Stack = createNativeStackNavigator()

const Main = () => {

    const [ currentListId, setCurrentListId ] = useState(0)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveLists())
    }, [currentListId, dispatch])

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Budget" component={BudgetPage} />
          <Stack.Screen name="Lists" component={ListPage} setCurrentListId={setCurrentListId} currentListId={currentListId}/>
          <Stack.Screen name="Wallet" component={WalletPage} />
          <Stack.Screen name="Profile" component={UserProfile} />
          <Stack.Screen name="Stores" component={StoresPage} />
          <Stack.Screen name="Settings" component={UserSettings} />
          <Stack.Screen name="GroceryList" component={ItemPage} />
          <Stack.Screen name="Card" component={CardPage} />
        </Stack.Navigator>
      </NavigationContainer>
  )
}

export default Main;
