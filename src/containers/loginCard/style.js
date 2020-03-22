import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  dashCircle: {
    height: '85%',
    width: '130%',
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: wp('150%'),
    alignSelf: 'center',
    borderStyle: 'dashed'
  },
  whiteCircleCard: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    borderRadius: 5000,
    marginTop: '8%',
    alignSelf: 'center'
  },
  elementsContainer: {
    flex: 1
  },
  logContainer: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoImg: {
    height: 100,
    width: 100
    // backgroundColor: 'limegreen'
  },
  dynamicElementsContainer: {
    flex: 0.75,
    flexDirection: 'row'
  },
  point15Flex: {
    flex: 0.15
  },
  touchableElementsContainer: {
    flex: 0.7
  },
  inputContainer: {
    flex: 0.1
  },
  inputWithIcon: {
    flex: 0.5,
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#dedede',
    width: '90%'
  },
  rememberMeContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkRemember: {
    height: 15,
    width: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    marginRight: 5
  },
  remember: {
    flex: 0.5,
    flexDirection: 'row'
  },
  fogotPassword: {
    flex: 1,
    alignItems: 'flex-end'
  },
  cardFooterContiner: {
    flex: 0.8,
    alignItems: 'center'
  },
  loginBottonContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  connectTextContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  socialBottonContainer: {
    flex: 1,
    flexDirection: 'row'
  }
});
