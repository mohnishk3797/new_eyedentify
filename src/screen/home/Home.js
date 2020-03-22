import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
  StyleSheet,
  TextInput
} from 'react-native';
import { styles } from './style';
import { AuthContext } from '../../navigation/index';
import AsyncStorage from '@react-native-community/async-storage';
import { Header } from '../../components';
export function Home({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const tokenHandler = async () => {
    let token = await AsyncStorage.getItem('userToken');
    console.log('token:', token);
  };
  tokenHandler();

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={{ flexGrow: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Header title="Home" navigation={navigation} />
        <TouchableOpacity
          style={{ height: 50, backgroundColor: 'red' }}
          onPress={() => signOut()}
        >
          <Text>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Login Screen</Text>
    // </View>
  );
}
