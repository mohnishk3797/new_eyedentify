import React from 'react';
import { TouchableOpacity, Image, View, Text } from 'react-native';
import { styles } from './style';
import { Images } from '../../util';
import Icon from 'react-native-vector-icons/Feather';

export function Header(props) {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeft}>
        {props.isBack && (
          <TouchableOpacity
            style={styles.headerButton}
            onPress={() => props.navigation.goBack()}
          >
            <Icon name="arrow-left" size={30} color="#000" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerMain}>
        <Text>{props.title}</Text>
      </View>
      <View style={styles.headerRight}></View>
    </View>
  );
}
