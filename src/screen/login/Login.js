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
import { loginService } from '../../Redux/Operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  ErrorAction,
  ProfileDataAction,
  userDataAction,
  TokenAction
} from '../../Redux/Actions';
function Login({ navigation }) {
  const [state, setState] = React.useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const data = {
    email: state.email,
    password: state.password
  };

  const onSignIn = async () => {
    let data = {
      username: state.email,
      password: state.password,
      token: 'abc',
      deviceId: 'abc1'
    };

    loginService(data)
      .then(res => {
        dispatch(ProfileDataAction(res.profile_pic));
        dispatch(userDataAction(res.user));
        dispatch(TokenAction(res.token));
      })
      .catch(err => {
        dispatch(ErrorAction(err));
      });
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

export { Login };
