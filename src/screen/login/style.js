import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Fonts } from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const { height } = Dimensions.get('window');
export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollContainer: {
    flexGrow: 1
  },
  gradient: {
    height
  },
  mainContainer: {
    flex: 0.9,
    justifyContent: 'center'
  },
  fixedCircle: {
    borderWidth: 1,
    borderColor: '#dedede',
    backgroundColor: Colors.darkPrimary,
    height: wp('10%'),
    width: wp('10%'),
    borderRadius: wp('10%'),
    position: 'absolute',
    top: '6%',
    right: '29%',
    borderStyle: 'dashed'
  },
  footer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    color: Colors.primaryColor
  }
});
