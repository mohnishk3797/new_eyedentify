import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigation/index';
import AsyncStorage from '@react-native-community/async-storage';

export function Chat({ navigation }) {
  const { signOut } = useContext(AuthContext);

  const tokenHandler = async () => {
    let token = await AsyncStorage.getItem('userToken');
  };
  tokenHandler();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chat Screen</Text>
      {/* <TouchableOpacity
        style={{ height: 50, backgroundColor: 'red' }}
        onPress={() => signOut()}
      >
        <Text>Logout</Text>
      </TouchableOpacity> */}
    </View>
  );
}
