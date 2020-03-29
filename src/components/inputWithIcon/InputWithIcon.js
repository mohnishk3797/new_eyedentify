import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {HelperText} from 'react-native-paper';

import {styles} from './style';
import {Images} from '../../util';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {round} from 'react-native-reanimated';
export function InputWithIcon(props) {
  return (
    <View>
      <View style={styles.inputWithIcon}>
        <Image
          resizeMode="contain"
          style={{
            height: wp('5%'),
            width: wp('5%'),
            marginRight: 15,
          }}
          source={Images[props.iconName]}
        />
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          value={props.value}
          onChangeText={text => props.onChange(text, props.name)}
          secureTextEntry={props.isSecure}
          keyboardType={props.numeric && 'numeric'}
        />
      </View>
      <HelperText
        type="error"
        style={styles.errorText}
        visible={props.error ? props.error[props.name] !== undefined : false}>
        {props.error &&
          props.error[props.name] !== undefined &&
          props.error[props.name]}
      </HelperText>
    </View>
  );
}
