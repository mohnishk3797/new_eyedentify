import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logContainer: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        height: 100,
        width: 100
    },
    mainContainer: {
        alignItems: 'center',
        flex: 6
    },
    footerContainer: {
        flex: 1.4,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    footerText: {
        color: Colors.white
    }
})