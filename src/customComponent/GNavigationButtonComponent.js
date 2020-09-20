/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import * as colorConstants from '../constants/colorConstants';
import {NavigationScreenProps} from '@react-navigation/native';
type validatorProps = NavigationScreenProps & {
  objectOne?: Object,
  objectTwo?: Object,
  operation?: Function,
};

const navigationButtonComponent = (props: validatorProps) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={() => props.navProps.navigation.navigate(props.screenName)}
        style={styles.button}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '90%',
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: colorConstants.navigationButtonColor,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
});

export default navigationButtonComponent;
