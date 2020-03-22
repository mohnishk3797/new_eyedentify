import React, {useContext, useState} from 'react';
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
  TextInput,
} from 'react-native';
// import { styles } from './style';
import {Colors} from '../../theme';
import {SignUpCard, SocialButtonContainer} from '../../containers';
import {AuthContext} from '../../navigation/index';
import {Images} from '../../util';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export function Registration({navigation}) {
  const {signUp} = useContext(AuthContext);
  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');

  const {height} = Dimensions.get('window');
  const payload = {
    name,
    email,
    password,
    phoneNumber,
  };
  const doSignUp = () => {
    console.log(
      'Sign in successfull',
      'name: ',
      name,
      'email: ',
      email,
      'password: ',
      password,
      'phoneNumber: ',
      phoneNumber,
    );
    signUp();
  };

  const updateValue = (name, value) => {
    switch (name) {
      case 'Name':
        {
          setname(value);
        }
        break;
      case 'Email':
        {
          setEmail(value);
        }
        break;
      case 'Password':
        {
          setPassword(value);
        }
        break;
      case 'Phone Number':
        {
          setphoneNumber(value);
        }
        break;
      default: {
        console.log('Try again');
        return;
      }
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ScrollView style={{flexGrow: 1}} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            {/* <Icon name="arrow-left" size={30} color="#000" /> */}
          </View>
          <View style={styles.headerMain}>
            <Text>Sign Up</Text>
          </View>
          <View style={styles.headerRight}></View>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              resizeMode="contain"
              style={styles.profileImg}
              source={Images.dummyProfile}
            />
            <TouchableOpacity
              style={{
                backgroundColor: 'blue',
                height: wp('10%'),
                width: wp('10%'),
                borderRadius: wp('5%'),
                position: 'absolute',
                top: '12%',
                right: '35%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{height: wp('6%'), width: wp('6%')}}
                source={Images.whitePlus}
              />
            </TouchableOpacity>
          </View>
          <View style={{flex: 0.9, padding: 5}}>
            <View style={styles.inputWithIcon}>
              <Image
                resizeMode="contain"
                style={{height: wp('7%'), width: wp('7%'), marginRight: 15}}
                source={Images.user}
              />
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <TextInput
                  style={[styles.input, {flex: 0.45}]}
                  placeholder="Name"
                />
                <TextInput
                  style={[styles.input, {flex: 0.45}]}
                  placeholder="Surname"
                  // secureTextEntry
                />
              </View>
            </View>
            <View style={styles.inputWithIcon}>
              <Image
                resizeMode="contain"
                style={{height: wp('7%'), width: wp('7%'), marginRight: 15}}
                source={Images.mail}
              />
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="email"
              />
            </View>
            <View style={styles.inputWithIcon}>
              <Image
                resizeMode="contain"
                style={{height: wp('7%'), width: wp('7%'), marginRight: 15}}
                source={Images.mobile}
              />
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Contact Number"
              />
            </View>
            <View style={styles.inputWithIcon}>
              <Image
                resizeMode="contain"
                style={{height: wp('7%'), width: wp('7%'), marginRight: 15}}
                source={Images.document}
              />
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Vehicle Registration Number"
              />
            </View>
            <View style={styles.inputWithIcon}>
              <Image
                resizeMode="contain"
                style={{height: wp('7%'), width: wp('7%'), marginRight: 15}}
                source={Images.lock}
              />
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Password"
                secureTextEntry
              />
            </View>
            <View style={styles.inputWithIcon}>
              <Image
                resizeMode="contain"
                style={{height: wp('7%'), width: wp('7%'), marginRight: 15}}
                source={Images.lock}
              />
              <TextInput
                style={[styles.input, {flex: 1}]}
                placeholder="Repeat Password"
                secureTextEntry
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  headerLeft: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerMain: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerRight: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 0.9,
    marginTop: 10,
    backgroundColor: '#fff',
  },
  profileImageContainer: {
    flex: 0.1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImg: {
    height: wp('30%'),
    width: wp('30%'),
    borderRadius: wp('50%'),
  },
  inputWithIcon: {
    // flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    // width: '45%'
  },
});
