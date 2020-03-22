import { StyleSheet } from "react-native";
import { Colors, Fonts } from '../../theme';

export const styles = StyleSheet.create({
    socialButton: {
        height: 60,
        width: 60,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: Colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 15
    },
    socialLogo: {
        height: 30,
        width: 30
    }
});