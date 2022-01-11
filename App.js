import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, useNavigation } from '@react-navigation/native'

import { Provider } from 'react-redux'
import AppStack from './src/navigator/AppStack'
import store from './src/redux/store'

export default function App() {
  return (

      <NavigationContainer>
        <Provider store={store}>
          <AppStack />
        </Provider>
      </NavigationContainer>

  );
}