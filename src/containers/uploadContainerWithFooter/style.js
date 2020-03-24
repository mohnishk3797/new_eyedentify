import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  uploadContainer: {
    height: hp('22%'),
    marginTop: 20,
    marginBottom: 10
  },
  uploadHeader: {
    flex: 0.1,
    justifyContent: 'center'
  },
  uploadHeaderText: {},
  uploadButton: {
    flex: 0.7,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 10
  },
  elementContainer: { flexDirection: 'row' },
  uploadIcon: {
    flex: 0.2,
    alignItems: 'center'
  },
  textContainer: {
    flex: 0.8
  },
  uploadText: {},
  uploadFormatText: {},
  footer: {
    flex: 0.2
  },
  footerText: {
    fontSize: 15,
    color: 'gray'
  }
});
