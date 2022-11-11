import React from 'react';

import {Provider} from 'react-redux';
import configureStore from './src/states/store';
import AuthStack from './src/navigators/AuthStack';

import FlashMessage from 'react-native-flash-message';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <AuthStack />
      <FlashMessage position="top" />
    </Provider>
  );
}
