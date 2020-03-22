import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primaryColor,
    height: '70%',
    width: wp('40%'),
    borderRadius: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.75,
    shadowRadius: 5,
    elevation: 5,
    shadowColor: '#ccc',
    shadowOffset: {height: 0, width: 0},
  },
  buttonText: {
    color: '#fff',
  },
});
