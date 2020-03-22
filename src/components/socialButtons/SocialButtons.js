import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { Images } from '../../util';

export function SocialButtons(props) {
  return (
    <TouchableOpacity>
      <Image
        resizeMode="contain"
        style={{ height: 30, width: 30 }}
        source={Images[props.imageName]}
      />
    </TouchableOpacity>
  );
}
