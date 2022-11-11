import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';

import TabStack from './TabStack';
import LoginStack from './LoginStack';
import {NavigationContainer} from '@react-navigation/native';

import {useDispatch, useSelector} from 'react-redux';
import {selectLoginStatus} from '../states/App/AppReducer';
import {loginInitiate} from '../states/App/AppAction';

export default function AuthStack() {
  const loginStatus = useSelector(state => selectLoginStatus(state));
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  console.log(loginStatus);
  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {
      dispatch(loginInitiate());
    } else {
      console.log('user not logged in');
    }
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {loginStatus ? <TabStack /> : <LoginStack />}
    </NavigationContainer>
  );
}
