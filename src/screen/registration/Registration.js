import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  CheckBox
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import { signupService } from '../../Redux/Operations';
import {
  ErrorAction,
  ProfileDataAction,
  RegisterAction,
  TokenAction
} from '../../Redux/Actions';

// import { styles } from './style';
import { Colors } from '../../theme';
import { UploadContainer } from '../../containers';
import { Images } from '../../util';
import { Header, InputWithIcon, RoundButton, TwoInputsWithIcon } from '../../components';
const { height } = Dimensions.get('window');
import { Keboardavoing } from '../../containers';

export function Registration({ navigation }) {
  const [state, setState] = React.useState({
    businessName: '',
    businessSurname: '',
    businessEmail: '',
    businessContactNumber: '',
    businessPassword: '',
    repeatPassword: '',
    businessOwnaerId: null,
    businessRegistrationDoc: null,
    businessClearanceDoc: null,
    bussCurrentAnnualFinancialStatement: null,
    businesBankStatement: null,
    bussReferralesName: '',
    bussReferralesSurname: '',
    bussReferralesEmail: '',
    bussReferralesRecentJob: '',
    terms: false
  });

  const data = {
    name: state.name,
    surnam: state.businessSurname,
    email: state.email,
    businessContactNumber: state.businessContactNumber,
    businessPassword: state.businessPassword,
  };

  const changeHandler = (event, name) => {
    setState({
      ...state,
      [name]: event
    });
  };

  const handleChoosePhoto = (imgName) => {
    const options = {
      noData: true,
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setState({ 
          ...state,
          [imgName]: response 
        })
      }
    })
  }

  const userSignUp = () => {
    const data = new FormData()
    data.append('businessName', state.businessName)
    data.append('businessSurname', state.businessSurname)
    data.append('businessEmail', state.businessEmail)
    data.append('businessContactNumber', state.businessContactNumber)
    data.append('businessPassword', state.businessPassword)
    data.append('bussReferralesName', state.bussReferralesName)
    data.append('bussReferralesSurname', state.bussReferralesSurname)
    data.append('bussReferralesEmail', state.bussReferralesEmail)
    data.append('bussReferralesRecentJob', state.bussReferralesRecentJob)
    data.append('terms', state.terms)
    data.append('businessOwnaerId', {
      uri: state.businessOwnaerId.uri,
      type: 'image/jpeg',
      name: 'businessOwnaerId'
    });
    data.append('businessRegistrationDoc', {
      uri: state.businessRegistrationDoc.uri,
      type: 'image/jpeg',
      name: 'businessRegistrationDoc'
    });
    data.append('businessClearanceDoc', {
      uri: state.businessClearanceDoc.uri,
      type: 'image/jpeg',
      name: 'businessClearanceDoc'
    });
    data.append('bussCurrentAnnualFinancialStatement', {
      uri: state.bussCurrentAnnualFinancialStatement.uri,
      type: 'image/jpeg',
      name: 'bussCurrentAnnualFinancialStatement'
    });
    data.append('businesBankStatement', {
      uri: state.businesBankStatement.uri,
      type: 'image/jpeg',
      name: 'businesBankStatement'
    });

    console.log("eee - ", data)
    
    signupService(data)
      .then(res => {
        console.log('vinod - 1 - ',res)
      })
      .catch(err => {
        console.log('vinod error -', err)
      });
  }

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
                { name: 'businessName', value: state.businessName, placeholder: 'Name' },
                { name: 'businessSurname', value: state.businessSurname, placeholder: 'Surname' }
              ]}
              onChange={changeHandler}
              iconName="user"
            />
            <InputWithIcon
              name="businessEmail"
              placeholder="Email"
              value={state.email}
              iconName="mail"
              onChange={changeHandler}
            />
            <InputWithIcon
              name="businessName"
              placeholder="Business Name"
              value={state.email}
              iconName="mail"
              onChange={changeHandler}
            />
            <InputWithIcon
              name="businessContactNumber"
              placeholder="Contact Number"
              value={state.contactNumber}
              iconName="mobile"
              onChange={changeHandler}
              numeric
            />
            <InputWithIcon
              name="vehicleRegistrationNumber"
              placeholder="Vehicle Registration Number"
              value={state.vehicleRegistrationNumber}
              iconName="document"
              onChange={changeHandler}
            />
            <InputWithIcon
              name="businessPassword"
              placeholder="Password"
              value={state.password}
              iconName="lock"
              isSecure
              onChange={changeHandler}
            />
            <InputWithIcon
              name="repeatPassword"
              placeholder="Repeat Password"
              value={state.repeatPassword}
              iconName="lock"
              isSecure
              onChange={changeHandler}
            />
            <UploadContainer
              name="businessOwnaerId"
              heading="Copy of id of business owner and field staff"
              text="Upload ID document"
              format="JPG or PNG"
              photo={state.businessOwnaerId}
              onPress={() => handleChoosePhoto('businessOwnaerId')}
            />

            <UploadContainer
              name="businessRegistrationDoc"
              heading="Copy of business registration documents"
              text="Upload ID document"
              format="JPG or PNG"
              photo={state.businessRegistrationDoc}
              onPress={() => handleChoosePhoto('businessRegistrationDoc')}
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
            name="businessClearanceDoc"
              heading="Text Clearance Documents"
              text="Upload document"
              format="JPG or PNG"
              photo={state.businessClearanceDoc}
              onPress={() => handleChoosePhoto('businessClearanceDoc')}
            />
            <UploadContainer
              name="bussCurrentAnnualFinancialStatement"
              heading="Latest annual financial statement"
              text="Upload document"
              format="JPG or PNG"
              photo={state.bussCurrentAnnualFinancialStatement}
              onPress={() => handleChoosePhoto('bussCurrentAnnualFinancialStatement')}
            />

            <UploadContainer
              name="businesBankStatement"
              heading="Banking letter"
              text="Upload document"
              format="JPG or PNG"
              photo={state.businesBankStatement}
              onPress={() => handleChoosePhoto('businesBankStatement')}
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
                { name: 'bussReferralesName', value: state.bussReferralesName, placeholder: 'Name' },
                { name: 'bussReferralesSurname', value: state.bussReferralesSurname, placeholder: "Surname" }
              ]}
              onChange={changeHandler}
              iconName="user"
            />
            <InputWithIcon
              name="bussReferralesEmail"
              placeholder="Email"
              value={state.bussReferralesSurname}
              iconName="mail"
              onChange={changeHandler}
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
            <InputWithIcon
              name="bussReferralesRecentJob"
              placeholder="Referrales Recent Job"
              value={state.bussReferralesRecentJob}
              iconName="mail"
              onChange={changeHandler}
              />
              </View>
          </View>
          <View style={{ flexDirection: 'column'}}>
            <View style={{ flexDirection: 'row' }}>
              <CheckBox
                value={state.terms}
                onValueChange={() => setState({ ...state, terms: !state.terms })}
              />
              <Text style={{marginTop: 5}}>I agree with terms & conditions</Text>
            </View>
          </View>
          <View style={styles.registerBottonContainer}>
            <RoundButton title="Sign Up" onPress={userSignUp} />
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
  },
  registerBottonContainer: {
    flex: 1,
    justifyContent: 'center'
  }
});
