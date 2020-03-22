import * as React from 'react';
import { Button, View, Text } from 'react-native';

export function Splash({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading...</Text>
        </View>
    );
}