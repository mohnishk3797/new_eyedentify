import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style';
import { Images } from '../../util';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
export function InputWithIcon(props) {
  return (
    <View style={styles.inputWithIcon}>
      <Image
        resizeMode="contain"
        style={{
          height: wp('7%'),
          width: wp('7%'),
          marginRight: 15
        }}
        source={Images[props.iconName]}
      />
      <TextInput
        style={styles.input}
        placeholder={props.name}
        value={props.value}
        onChangeText={text => props.onChange(text, props.name)}
      />
    </View>
    // <TextInput
    //     style={styles.input}
    //     placeholder={props.placeholder}
    //     secureTextEntry={props.isSecure}
    //     value={props.value}
    //     onChangeText={(text) => props.updateValue(props.placeholder, text)}
    // />
  );
}
