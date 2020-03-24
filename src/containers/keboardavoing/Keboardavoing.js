import React, { Children } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Dimensions
} from 'react-native';

export function Keboardavoing(props) {
  let { height } = Dimensions.get('window');
  height = Platform.OS === 'android' ? height : height - 60;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      // behavior="padding"
      keyboardVerticalOffset={35}
      keyboardShouldPersistTaps={true}
    >
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        {props.children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
