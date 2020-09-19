/**
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {useSelector} from 'react-redux';

import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NavigationScreenProps} from '@react-navigation/native';

type TwoProps = NavigationScreenProps & {};


const Two = (props: TwoProps) => {

  const navigateToScreen = (screenName: string) => {
    props.navigation.navigate(screenName);
  };

  
  const value = useSelector(state => state.main.inputValue);
  return (
    <View style={styles.container}>
      <View style={styles.welcomeViewContainer}>
        <Text>Input Data :{value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          testID={"btnScreenOne"}
          onPress={() => navigateToScreen('One')}
          style={styles.button}>
          <Text style={styles.textStyle}>Go to screen one</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => navigateToScreen('Three')}
          style={styles.button}>
          <Text style={styles.textStyle}>Go to screen three</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Two;
