/**
 * @format
 * @flow strict-local
 */
import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import SlidingButton from '../customComponent/slidingButton';
import {NavigationScreenProps} from '@react-navigation/native';
import ButtonComponent from '../customComponent/buttonComponent';
import {higherOrderComponent} from '../hoc/buttonHOCComponent';


const VaritionOne=higherOrderComponent(ButtonComponent,styles.buttonTwoStyle);
const VaritionTwo=higherOrderComponent(ButtonComponent,styles.buttonThreeStyle,styles.whiteText);

type ThreeProps = NavigationScreenProps & {};
const Three = (props: ThreeProps) => {
  const value = useSelector(state => state.main.inputValue);
  const slideEndAction = () => {
    props.navigation.navigate('One');
  };

 
  return (
    <View style={styles.container}>
      <View style={styles.welcomeViewContainer}>
        <Text style={styles.inputValueStyle}>Input Data :{value}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('One')}
          style={styles.button}>
          <Text style={styles.textStyle}>Go to screen one</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Two')}
          style={styles.button}>
          <Text style={styles.textStyle}>Go to screen two</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.variationButtonContainer}>
        <Text style={styles.variationHeaderText}>4 variations of a button</Text>
        {/* <View style={[styles.buttonStyle]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextStyle}>Press me</Text>
          </TouchableOpacity>
        </View> */}
        <ButtonComponent />
        {/* <View style={[styles.buttonStyle, styles.buttonTwoStyle]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonTextStyle}>Press me</Text>
          </TouchableOpacity>
        </View> */}
        <VaritionOne/>
        {/* <View style={[styles.buttonStyle, styles.buttonThreeStyle]}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.whiteText}>Press me</Text>
          </TouchableOpacity>
        </View> */}
        <VaritionTwo/>
        <View style={[styles.slidingButtonStyle]}>
          <SlidingButton testID={'slider'} endAction={slideEndAction}></SlidingButton>
        </View>
      </View>
    </View>
  );
};

export default Three;
