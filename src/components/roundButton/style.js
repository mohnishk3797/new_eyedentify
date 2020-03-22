import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    height: '70%',
    width: wp('40%'),
    borderRadius: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  }
});
