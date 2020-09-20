
/**
 * @format
 * @flow strict-local
 */
import React, {Component,useState,useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {NavigationScreenProps} from '@react-navigation/native';
import {combineObject,combineArray,combineAny} from '../utils/functionUtilities';
import ValidatorComponent from '../customComponent/validatorComponent';
type UtilityValidatorProps = NavigationScreenProps & {

};

const UtilityValidator = (props:UtilityValidatorProps) => {

    let person={
        name:"Basil",
        place:"Chennai"
    }
    let hobby={
        activity:"Keyboard",
        level:"Intermediate"
    }

    let fruitArray=["Banana","WaterMelon"];
    let vebetableArray=["Brinjal","Carrot"];

    let partOne=100;
    let partTwo=1;
    let sprintType="Jumping Jacks"
    let sprintAction="Completed"


  return (
      <ScrollView>
    <View style={styles.container}>
      <ValidatorComponent headerOne={"Person"} headerTwo={"Hobby"} final={"Combined Object"} objectOne={person} objectTwo={hobby} operation={combineObject}/>
      <ValidatorComponent headerOne={"Fruits"} headerTwo={"Vegetables"} final={"Combined Array"}  objectOne={fruitArray} objectTwo={vebetableArray} operation={combineArray}/>
      <ValidatorComponent headerOne={"First Part"} headerTwo={"Second Part"} final={"Total Parts"}  objectOne={partOne} objectTwo={partTwo} operation={combineAny}/>
      <ValidatorComponent headerOne={"Sprint Type"} headerTwo={"Sprint Action"} final={"Final"}  objectOne={sprintType} objectTwo={sprintAction} operation={combineAny}/>
      <ValidatorComponent headerOne={"Total"} headerTwo={"Action"} final={"Total Action"}  objectOne={partOne} objectTwo={sprintType} operation={combineAny}/>
    </View>
    </ScrollView>
  );
};

export default UtilityValidator;
