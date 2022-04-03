import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from './auth';
import messages from './messages';
import loading from './loading';
import persistReducer from 'redux-persist/es/persistReducer';
import categories from './categories';
import vehicles from './vehicles';

const persistAuth = {
  key: 'auth',
  storage: AsyncStorage,
};
const persistCategories = {
  key: 'categories',
  storage: AsyncStorage,
};

const rootReducers = combineReducers({
  auth: persistReducer(persistAuth, auth),
  categories: persistReducer(persistCategories, categories),
  vehicles,
  messages,
  loading,
});

export default rootReducers;
