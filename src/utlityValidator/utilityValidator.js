
/**
 * @format
 * @flow strict-local
 */
import React, {Component,useState,useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {styles} from './styles';
import {NavigationScreenProps} from '@react-navigation/native';
import {combineObject,combineArray,combineAny} from '../utils/functionUtilities';

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
     <View style={styles.validatorContainer}>
       <Text style={styles.header}>{"Person"}</Text>
       <Text>{JSON.stringify(person )}</Text>
       <Text style={styles.header}>{"Hobby"}</Text>
       <Text>{JSON.stringify(hobby )}</Text>
       <Text style={styles.header}>{"Combined Object"}</Text>
       <Text>{JSON.stringify(combineObject(person,hobby))}</Text>
     </View>
     <View style={styles.validatorContainer}>
       <Text style={styles.header}>{"Fruits"}</Text>
       <Text>{JSON.stringify(fruitArray )}</Text>
       <Text style={styles.header}>{"Vegetables"}</Text>
       <Text>{JSON.stringify(vebetableArray )}</Text>
       <Text style={styles.header}>{"Combined Array"}</Text>
       <Text>{JSON.stringify(combineArray(fruitArray,vebetableArray))}</Text>
     </View>
     <View style={styles.validatorContainer}>
       <Text style={styles.header}>{"First Part"}</Text>
       <Text>{partOne}</Text>
       <Text style={styles.header}>{"Second Part"}</Text>
       <Text>{partTwo}</Text>
       <Text style={styles.header}>{"Total Parts"}</Text>
       <Text>{combineAny(partOne,partTwo)}</Text>
     </View>
     <View style={styles.validatorContainer}>
       <Text style={styles.header}>{"Sprint Type"}</Text>
       <Text>{sprintType}</Text>
       <Text style={styles.header}>{"Sprint Action"}</Text>
       <Text>{sprintAction}</Text>
       <Text style={styles.header}>{"Final"}</Text>
       <Text>{combineAny(sprintType,sprintAction)}</Text>
     </View>
     <View style={styles.validatorContainer}>
       <Text style={styles.header}>{"Total"}</Text>
       <Text>{partOne}</Text>
       <Text style={styles.header}>{"Action"}</Text>
       <Text>{sprintType}</Text>
       <Text style={styles.header}>{"Total Action"}</Text>
       <Text>{combineAny(partOne,sprintType)}</Text>
     </View>
    </View>
    </ScrollView>
  );
};

export default UtilityValidator;
