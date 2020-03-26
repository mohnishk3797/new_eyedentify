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
    businessOwnerEmail: '',
    businessPassword: ''
  });
  const dispatch = useDispatch();
  const data = {
    businessOwnerEmail: state.businessOwnerEmail,
    businessPassword: state.businessPassword
  };

  const onSignIn = async () => {
    let data = {
      businessOwnerEmail: state.businessOwnerEmail,
      businessPassword: state.businessPassword,
    };

    loginService(data)
      .then(res => {
        console.log(data, res)
        dispatch(ProfileDataAction(res.profile_pic));
        dispatch(userDataAction(res.user));
        dispatch(TokenAction(res.token));
      })
      .catch(err => {
        console.log(err       )
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
