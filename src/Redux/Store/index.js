import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../Reducers';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
const persistConfig = {
  key: 'eyedentifyme',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const loggerMiddleware = createLogger();
const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware, loggerMiddleware)),
);
const persistor = persistStore(store);

export {store, persistor};
