import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './style';
import {Colors} from '../../theme';
import {AuthContext} from '../../navigation/index';
import {LoginCard} from '../../containers';
import {loginService} from '../../Redux/Operations';
import {useDispatch, useSelector} from 'react-redux';
import {
  ErrorAction,
  ProfileDataAction,
  userDataAction,
  TokenAction,
} from '../../Redux/Actions';
function Login({navigation}) {
  const [state, setState] = React.useState({
    businessOwnerEmail: '',
    businessPassword: '',
  });
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {}, [state]);
  const validate = () => {
    const {businessOwnerEmail, businessPassword} = state;
    let error = {};
    if (businessPassword === '') {
      error.businessPassword = 'Password Field Required.';
    }
    if (businessOwnerEmail === '') {
      error.businessOwnerEmail = 'Email / Username Field required.';
    }
    setError(error);
    return Object.keys(error).length === 0;
  };
  const onSignIn = async () => {
    let data = {
      businessOwnerEmail: state.businessOwnerEmail,
      businessPassword: state.businessPassword,
    };
    if (!validate()) {
      return false;
    }
    loginService(data)
      .then(res => {
        // console.log(data, res)
        dispatch(ProfileDataAction(res.profile_pic));
        dispatch(userDataAction(res.user));
        dispatch(TokenAction(res.token));
      })
      .catch(err => {
        // console.log("err", err)
        dispatch(ErrorAction(err));
      });
  };

  const changehandler = async (event, name) => {
    setState({
      ...state,
      [name]: event,
    });
    await validate();
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContainer}>
        <LinearGradient colors={Colors.gradient} style={styles.container}>
          <View style={styles.mainContainer}>
            <LoginCard
              data={state}
              onSignIn={onSignIn}
              onChange={changehandler}
              error={error}
              onBlur={validate}
            />

            <View style={styles.fixedCircle} />
          </View>
          <View style={styles.footer}>
            {/* <View style={{ flexDirection: 'row' }}> */}
            <TouchableOpacity
              style={{flexDirection: 'row'}}
              onPress={() => navigation.navigate('Registration')}>
              <Text style={styles.footerText}>Don't have account? </Text>
              <Text style={[styles.footerText, {fontWeight: 'bold'}]}>
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

export {Login};
