import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
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
import { retrieveItems } from './actions/items';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { retrieveBudget } from './actions/budget';
import { retrieveCards } from './actions/card';
import { retrieveStores } from './actions/store';
import { selectToken, selectUser } from './state/authSlice';


const Stack = createNativeStackNavigator()

const Main = ({ index }) => {
  
  const [currentListId, setCurrentListId] = useState(0)
  const [currentCardId, setCurrentCardId] = useState(0)
  const [currentItemId, setCurrentItemId] = useState(0)
  const [currentBudgetId, setCurrentBudgetId] = useState(0)
  const [currentStoreId, setCurrentStoreId] = useState(0)

  const dispatch = useDispatch();

  const user = useSelector(selectToken)
  console.log("user", user)


  useEffect(() => {
    dispatch(retrieveLists())
    dispatch(retrieveCards())
    dispatch(retrieveItems())
    dispatch(retrieveBudget())
    dispatch(retrieveStores())
  }, [currentListId, dispatch], 
  [currentCardId, dispatch],
  [currentItemId, dispatch],
  [currentBudgetId, dispatch],
  [currentStoreId, dispatch]
  )
  

  return (
    <GestureHandlerRootView style={[{flex: 1}]}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Budget" component={BudgetPage} setCurrentBudgetId={setCurrentBudgetId} currentBudgetId={currentBudgetId}/>
          <Stack.Screen name="Lists" component={ListPage} setCurrentListId={setCurrentListId} currentListId={currentListId} />
          <Stack.Screen name="Wallet" component={WalletPage} setCurrentCardId={setCurrentCardId} currentCardId={currentCardId} />
          <Stack.Screen name="Profile" component={UserProfile} />
          <Stack.Screen name="Stores" component={StoresPage} />
          <Stack.Screen name="Settings" component={UserSettings} />
          <Stack.Screen name='GroceryList' component={ItemPage} setCurrentItemId={setCurrentItemId} currentItemId={currentItemId} />
          <Stack.Screen name="Card" component={CardPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default Main;
