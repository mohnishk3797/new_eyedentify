import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

export const styles = StyleSheet.create({
  headerContainer: {
    flex: 0.1,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  headerLeft: {
    flex: 0.15
  },
  headerButton: {
    flex: 1,
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
  }
});
