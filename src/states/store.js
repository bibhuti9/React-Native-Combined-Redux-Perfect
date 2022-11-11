import {createStore, combineReducers} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {applyMiddleware} from '@reduxjs/toolkit';

import apiReducer from './API/reducer';
import appReducer from './App/AppReducer';
const mainReducer = combineReducers({
  apiState: apiReducer,
  appState: appReducer,
});

const configureStore = () => {
  return createStore(mainReducer, applyMiddleware(thunk));
};
export default configureStore;
