import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  uploadContainer: {
    height: hp('18%'),
    marginTop: 20
    // marginBottom: 10
  },
  uploadHeader: {
    flex: 0,
    justifyContent: 'center'
  },
  uploadHeaderText: {},
  uploadButton: {
    flex: 0.8,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 10,
    justifyContent: 'center',
    marginTop: 10
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
  uploadFormatText: {}
});
