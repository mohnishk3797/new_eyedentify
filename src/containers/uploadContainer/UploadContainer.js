import React from 'react';
import {View, Text, Image, Button, TouchableOpacity, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Feather';

import {styles} from './style';
import {Images} from '../../util';
import {InputWithIcon, RoundButton, SocialButtons} from '../../components';

export function UploadContainer (props) {
  return (
    <View style={styles.uploadContainer}>
      <View style={styles.uploadHeader}>
        <Text style={styles.uploadHeaderText}>{props.heading}</Text>
      </View>
      <TouchableOpacity style={styles.uploadButton} onPress={props.onPress} >
        <View style={styles.elementContainer}>
          <View style={styles.uploadIcon}>
            <Icon name="home" size={40} />
          </View>
          <View style={styles.textContainer}>
            {/* <Text style={styles.uploadText}>{props.text}</Text> */}
            {props.photo ? 
              <Image
                source={{uri: props.photo.uri}}
                style={{width: 300, height: 70}}
              />
              :
              <Text style={styles.uploadFormatText}>{props.format}</Text>
            }
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
