/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { NavigationScreenProps } from '@react-navigation/native';
import {
  View, Text, TouchableOpacity, Dimensions, StyleSheet
} from 'react-native';
import * as colorConstants from '../constants/colorConstants';

type buttonProps = NavigationScreenProps &{
    containerStyle?:Object,
    textStyle?:Object
  };

const buttonComponent = (props: buttonProps) => (
  <View style={[styles.buttonStyle, props.containerStyle]}>
    <TouchableOpacity style={styles.button}>
      <Text testID="btnText" style={[styles.buttonTextStyle, props.textStyle]}>Press me</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  buttonStyle: {
    width: '90%',
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.07,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: colorConstants.blueText,
    textAlign: 'center',
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
});

export default buttonComponent;
