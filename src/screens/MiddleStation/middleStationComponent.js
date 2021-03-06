/**
 * @format
 * @flow strict-local
 */
import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { NavigationScreenProps } from '@react-navigation/native';
import { GNavigationButtonComponent } from '../../customComponent';
import { styles } from './styles';

type MiddleStationProps = NavigationScreenProps & {};

const MiddleStation = (props: MiddleStationProps) => {
  const value = useSelector((state) => state.main.inputValue);
  return (
    <View style={styles.container}>
      <View style={styles.welcomeViewContainer}>
        <Text>
          Input Data :
          {value}
        </Text>
      </View>
      <GNavigationButtonComponent
        navProps={props}
        title="Go to Welcome"
        screenName="welcome"
      />
      <GNavigationButtonComponent
        navProps={props}
        title="Go to Showcase"
        screenName="showcase"
      />
    </View>
  );
};

export default MiddleStation;
