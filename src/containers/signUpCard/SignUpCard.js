import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';
import { RoundButton, InputTextBox } from '../../components';

export function SignUpCard(props) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.inputHeader}>
          <Text style={styles.inputHeaderText}>{props.title}</Text>
        </View>
        <View style={styles.inputFields}>
          <InputTextBox
            placeholder="Name"
            value={props.payload.name}
            updateValue={(name, value) => props.updateValue(name, value)}
          />
          <InputTextBox
            placeholder="Email"
            value={props.payload.email}
            updateValue={(name, value) => props.updateValue(name, value)}
          />
          <InputTextBox
            placeholder="Password"
            isSecure
            value={props.payload.password}
            updateValue={(name, value) => props.updateValue(name, value)}
          />
          <InputTextBox
            placeholder="Phone Number"
            value={props.payload.phoneNumber}
            updateValue={(name, value) => props.updateValue(name, value)}
          />
          <Text style={styles.inputFooterText}>Forget Password?</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <RoundButton
          onSubmit={() => props.onSubmit()}
          transform={props.transform}
        />
      </View>
    </View>
  );
}
