import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../navigation/index';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch} from 'react-redux';
import {TokenAction} from '../../Redux/Actions/';
export function Home({navigation}) {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <TouchableOpacity
        style={{height: 50, backgroundColor: 'red'}}
        onPress={() => dispatch(TokenAction(null))}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
