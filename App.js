import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Navigation} from './src/navigation';

import {Provider} from 'react-redux';
import {store, persistor} from './src/Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as PaperProvider} from 'react-native-paper';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PaperProvider>
            <SafeAreaView style={{flex: 1}}>
              <StatusBar barStyle="dark-content" />
              <Navigation />
            </SafeAreaView>
          </PaperProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
