import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './style';
import { Colors } from '../../theme';
import { AuthContext } from '../../navigation/index';

import { LoginCard } from '../../containers';

import { loginService } from '../../service/authentication';

export function Login({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [state, setState] = React.useState({
    email: '',
    password: ''
  });

  const data = {
    email: state.email,
    password: state.password
  };

  const onSignIn = async () => {
    // signIn();
    // return;
    let data = {
      username: state.email,
      password: state.password
    };
    const obj = await loginService(data);
    // console.log("login 1 ", obj)
  };

  const changehandler = (event, name) => {
    setState({
      ...state,
      [name]: event
    });
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContainer}
      >
        <LinearGradient colors={Colors.gradient} style={styles.container}>
          <View style={styles.mainContainer}>
            <LoginCard
              data={data}
              onSignIn={onSignIn}
              onChange={changehandler}
            />

            <View style={styles.fixedCircle} />
          </View>
          <View style={styles.footer}>
            {/* <View style={{ flexDirection: 'row' }}> */}
            <TouchableOpacity
              style={{ flexDirection: 'row' }}
              onPress={() => navigation.navigate('Registration')}
            >
              <Text style={styles.footerText}>Don't have account? </Text>
              <Text style={[styles.footerText, { fontWeight: 'bold' }]}>
                SIGN UP
              </Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
