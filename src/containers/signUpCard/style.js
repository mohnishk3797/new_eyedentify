import { StyleSheet } from "react-native";
import { Colors, Fonts } from '../../theme';

export const styles = StyleSheet.create({
    cardContainer: {
        flex: 1,
        width: '90%',
        alignItems: 'center',
        // justifyContent: 'center',
        overflow: 'hidden',
    },
    inputContainer: {
        width: '100%',
        height: 350,
        backgroundColor: Colors.white,
        borderRadius: 35,
        position: "relative",
        zIndex: 0,
    },
    inputHeader: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 30,
    },
    inputHeaderText: {
        fontSize: Fonts.heading,
        fontWeight: 'bold'
    },
    inputFields: {
        flex: 9,
        alignItems: 'center'
    },
    inputFooterText: {
        fontSize: Fonts.smallText,
        alignSelf: 'flex-end',
        marginTop: 10,
        marginRight: '7%',
        color: Colors.linkText
    },
    buttonContainer: {
        marginTop: -298,
        marginLeft: '33%',
        width: '106%',
        height: 358,
        backgroundColor: Colors.white,
        zIndex: -1,
        transform: [
            {
                rotate: "21.00deg"
            }
        ],
        borderRadius: 35,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    }
});