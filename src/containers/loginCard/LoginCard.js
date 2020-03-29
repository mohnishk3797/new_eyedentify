import React from 'react';
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {styles} from './style';
import {Images} from '../../util';
import {InputWithIcon, RoundButton, SocialButtons} from '../../components';

export function LoginCard(props) {
  return (
    <View style={styles.dashCircle}>
      <View style={styles.whiteCircleCard}>
        <View style={styles.elementsContainer}>
          <View style={styles.logContainer}>
            <Image
              resizeMode="contain"
              style={styles.logoImg}
              source={Images.BrandLogo}
            />
          </View>
          <View style={styles.dynamicElementsContainer}>
            <View style={styles.point15Flex} />
            <View style={styles.touchableElementsContainer}>
              <View style={styles.inputContainer}>
                <InputWithIcon
                  name="businessOwnerEmail"
                  placeholder="Email"
                  value={props.data.businessOwnerEmail}
                  iconName="mail"
                  onChange={props.onChange}
                  error={props.error}
                />

                <InputWithIcon
                  name="businessPassword"
                  placeholder="Password"
                  value={props.data.businessPassword}
                  iconName="lock"
                  onChange={props.onChange}
                  error={props.error}
                  isSecure
                />
              </View>
              <View style={styles.rememberMeContainer}>
                <View style={styles.remember}>
                  <View style={styles.checkRemember} />
                  <Text>Remember me</Text>
                </View>
                <View style={styles.fogotPassword}>
                  <Text>Forgot Password?</Text>
                </View>
              </View>
              <View style={styles.cardFooterContiner}>
                <View style={styles.loginBottonContainer}>
                  <RoundButton title="Log In" onPress={props.onSignIn} />
                </View>
                <View style={styles.connectTextContainer}>
                  <Text>OR CONNECT WITH</Text>
                </View>
                <View style={styles.socialBottonContainer}>
                  <SocialButtons imageName="FacebookBlue" />
                  <SocialButtons imageName="GoogleBlue" />
                </View>
              </View>
            </View>
            <View style={styles.point15Flex} />
          </View>
        </View>
      </View>
    </View>
  );
}
