import React from "react";
import { View, Image } from "react-native";
import { styles } from './style';
import { SocialButtons } from '../../components';

export function SocialButtonContainer(props) {
    return (
        <View style={styles.socialButtonContainer}>
            <SocialButtons name='Facebook' />
            <SocialButtons name='Google' />
        </View>
    )
}