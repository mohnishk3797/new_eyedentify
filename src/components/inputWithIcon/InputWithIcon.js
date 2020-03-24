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
          height: wp('5%'),
          width: wp('5%'),
          marginRight: 15
        }}
        source={Images[props.iconName]}
      />
      <TextInput
        style={styles.input}
        placeholder={props.name}
        value={props.value}
        onChangeText={text => props.onChange(text, props.name)}
        secureTextEntry={props.isSecure}
        keyboardType={props.numeric && 'numeric'}
      />
    </View>
  );
}
