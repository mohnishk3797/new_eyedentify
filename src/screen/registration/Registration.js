import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

// import { styles } from './style';
import { Colors } from '../../theme';
import { UploadContainer } from '../../containers';
import { Images } from '../../util';
import { Header, InputWithIcon, TwoInputsWithIcon } from '../../components';
const { height } = Dimensions.get('window');
import { Keboardavoing } from '../../containers';

export function Registration({ navigation }) {
  const [state, setState] = React.useState({
    name: '',
    surname: '',
    email: '',
    contactNumber: '',
    password: '',
    repeatPassword: ''
  });

  const changehandler = (event, name) => {
    console.log('event: ', event, 'name: ', name);
    setState({
      ...state,
      [name]: event
    });
  };

  const onUpload = () => {
    console.log('upload press');
  };

  return (
    <>
      <Header title="SIGN UP" navigation={navigation} isBack />
      <Keboardavoing>
        <View style={styles.cardContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              resizeMode="contain"
              style={styles.profileImg}
              source={Images.dummyProfile}
            />
            <TouchableOpacity
              style={{
                backgroundColor: Colors.primaryColor,
                height: wp('10%'),
                width: wp('10%'),
                borderRadius: wp('5%'),
                position: 'absolute',
                top: '12%',
                right: '35%',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Image
                resizeMode="contain"
                style={{ height: wp('3.5%'), width: wp('3.5%') }}
                source={Images.whitePlus}
              />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 15 }}>
            <TwoInputsWithIcon
              data={[
                { name: 'name', value: state.name },
                { name: 'surname', value: state.surnam }
              ]}
              onChange={changehandler}
              iconName="user"
            />
            <InputWithIcon
              name="email"
              value={state.email}
              iconName="mail"
              onChange={changehandler}
            />
            <InputWithIcon
              name="contactNumber"
              value={state.contactNumber}
              iconName="mobile"
              onChange={changehandler}
              numeric
            />
            <InputWithIcon
              name="vehicleRegistrationNumber"
              value={state.vehicleRegistrationNumber}
              iconName="document"
              onChange={changehandler}
            />
            <InputWithIcon
              name="password"
              value={state.password}
              iconName="lock"
              isSecure
              onChange={changehandler}
            />
            <InputWithIcon
              name="repeatPassword"
              value={state.repeatPassword}
              iconName="lock"
              isSecure
              onChange={changehandler}
            />
            <UploadContainer
              heading="Copy of id of business owner and field staff"
              text="Upload ID document"
              format="JPG or PNG"
              onPress={onUpload}
            />

            <UploadContainer
              heading="Copy of id of business owner and field staff"
              text="Upload ID document"
              format="JPG or PNG"
              onPress={onUpload}
            />
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 15, color: 'gray' }}>
                CC documents, pty(ltd), SARS tax clearance certificate and
                latest annual financial statement
              </Text>
            </View>
            <View style={{ marginVertical: 15 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Sole proprietor require id document
              </Text>
            </View>
            <UploadContainer
              heading="Text Clearance Documents"
              text="Upload document"
              format="JPG or PNG"
              onPress={onUpload}
            />
            <UploadContainer
              heading="Latest annual financial statement"
              text="Upload document"
              format="JPG or PNG"
              onPress={onUpload}
            />

            <UploadContainer
              heading="Banking letter"
              text="Upload document"
              format="JPG or PNG"
              onPress={onUpload}
            />
            <View style={{ marginBottom: 15 }}>
              <Text style={{ fontSize: 15, color: 'gray' }}>
                Confirming details and that bank account is active
              </Text>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: 15,
              borderWidth: 1,
              borderColor: '#dedede',
              marginBottom: 20
            }}
          ></View>

          <View style={{ padding: 15 }}>
            <View style={styles.referralsHeader}>
              <Text style={styles.referralsHeaderText}>Referrals</Text>
            </View>
            <TwoInputsWithIcon
              data={[
                { name: 'name', value: state.name },
                { name: 'surname', value: state.surnam }
              ]}
              onChange={changehandler}
              iconName="user"
            />
            <InputWithIcon
              name="email"
              value={state.email}
              iconName="mail"
              onChange={changehandler}
            />
          </View>

          <View
            style={{
              marginHorizontal: 15,
              borderWidth: 1,
              borderColor: '#dedede',
              marginBottom: 20
            }}
          ></View>

          <View style={{ padding: 15 }}>
            <View style={styles.referralsHeader}>
              <Text style={styles.referralsHeaderText}>
                Most recent job carried out
              </Text>
            </View>
          </View>
        </View>
      </Keboardavoing>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1
  },
  headerContainer: {
    flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerMain: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerRight: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardContainer: {
    flex: 0.9,
    marginTop: 10,
    backgroundColor: '#fff'
  },
  profileImageContainer: {
    height: height * 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profileImg: {
    height: wp('30%'),
    width: wp('30%'),
    borderRadius: wp('30%')
  },
  inputWithIcon: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede'
  }
});
