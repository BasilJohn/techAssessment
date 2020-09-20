/**
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {NavigationScreenProps} from '@react-navigation/native';
import {higherOrderComponent} from '../../utils/hoc/buttonHOCComponent';
import {
  GNavigationButtonComponent,
  GButtonComponent,
  GSlidingButtonComponent
} from '../../customComponent';

const VaritionOne = higherOrderComponent(
  GButtonComponent,
  styles.buttonTwoStyle,
);
const VaritionTwo = higherOrderComponent(
  GButtonComponent,
  styles.buttonThreeStyle,
  styles.whiteText,
);

type ShowCaseProps = NavigationScreenProps & {};
const ShowCase = (props: ShowCaseProps) => {
  const value = useSelector(state => state.main.inputValue);
  const slideEndAction = () => {
    props.navigation.navigate('welcome');
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeViewContainer}>
        <Text style={styles.inputValueStyle}>Input Data :{value}</Text>
      </View>
      <GNavigationButtonComponent
        title={'Go to Welcome'}
        screenName={'welcome'}
      />
      <GNavigationButtonComponent
        title={'Go to Middle Station'}
        screenName={'middleStation'}
      />
      <View style={styles.variationButtonContainer}>
        <Text style={styles.variationHeaderText}>4 variations of a button</Text>
        <GButtonComponent />
        <VaritionOne />
        <VaritionTwo />
        <View style={[styles.slidingButtonStyle]}>
          <GSlidingButtonComponent
            testID={'slider'}
            endAction={slideEndAction}/>
        </View>
      </View>
    </View>
  );
};

export default ShowCase;
