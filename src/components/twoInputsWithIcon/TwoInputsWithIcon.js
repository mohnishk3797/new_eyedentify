import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './style';
import { Images } from '../../util';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

export function TwoInputsWithIcon(props) {
  return (
    <View style={styles.inputWithIcon}>
      <Image
        resizeMode="contain"
        style={{
          height: wp('4%'),
          width: wp('4%'),
          marginRight: 15
        }}
        source={Images[props.iconName]}
      />
      <View
        style={{
          width: '90%',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {props.data.map((item, index) => {
          return (
            <TextInput
              style={styles.input}
              placeholder={item.placeholder}
              value={item.value}
              onChangeText={text => props.onChange(text, item.name)}
            />
          );
        })}
      </View>
    </View>
  );
}
