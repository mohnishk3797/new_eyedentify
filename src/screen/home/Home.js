import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../navigation/index';
import AsyncStorage from '@react-native-community/async-storage';

export function Home({ navigation }) {
    const { signOut } = useContext(AuthContext);

    // AsyncStorage.getItem('userToken').then(res => {
    //     console.log('res', res)
    // })

    const tokenHandler = async () => {
        let token = await AsyncStorage.getItem('userToken');
        console.log('token:', token)
    }
    tokenHandler();



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Login Screen</Text>
            <TouchableOpacity style={{ height: 50, backgroundColor: 'red' }} onPress={() => signOut()}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
