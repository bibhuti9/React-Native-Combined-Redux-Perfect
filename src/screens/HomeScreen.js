import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch, useSelector} from 'react-redux';
import {logOut} from '../states/App/AppAction';
import {flashMessage} from '../common/commonFunction';
import {getMenus} from '../states/API/actions';

export default function HomeScreen() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMenus());
  });
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={logout}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
