/**
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {useSelector} from 'react-redux';

import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {NavigationScreenProps} from '@react-navigation/native';
import {GNavigationButtonComponent} from '../../customComponent';

type MiddleStationProps = NavigationScreenProps & {};

const MiddleStation = (props: MiddleStationProps) => {
  const value = useSelector(state => state.main.inputValue);
  return (
    <View style={styles.container}>
      <View style={styles.welcomeViewContainer}>
        <Text>Input Data :{value}</Text>
      </View>
      <GNavigationButtonComponent
        title={'Go to Welcome'}
        screenName={'welcome'}
      />
      <GNavigationButtonComponent
        title={'Go to Showcase'}
        screenName={'showcase'}
      />
    </View>
  );
};

export default MiddleStation;
