import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { store } from './state/store/store';
import { Provider } from 'react-redux';

import Main from './Main';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App;
