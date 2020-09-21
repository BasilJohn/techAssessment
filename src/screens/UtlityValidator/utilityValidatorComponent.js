/**
 * @format
 * @flow strict-local
 */
import React, {} from 'react';
import { View, ScrollView } from 'react-native';
import { combineObject, combineArray, combineAny } from '../../utils/commonFunctions/functionUtilities';
import { GValidatorComponent } from '../../customComponent';
import { styles } from './styles';

const UtilityValidator = () => {
  const person = {
    name: 'Basil',
    place: 'Chennai'
  };
  const hobby = {
    activity: 'Keyboard',
    level: 'Intermediate'
  };

  const fruitArray = ['Banana', 'WaterMelon'];
  const vebetableArray = ['Brinjal', 'Carrot'];

  const partOne = 100;
  const partTwo = 1;
  const sprintType = 'Jumping Jacks';
  const sprintAction = 'Completed';

  return (
    <ScrollView>
      <View style={styles.container}>
        <GValidatorComponent headerOne="Person" headerTwo="Hobby" final="Combined Object" objectOne={person} objectTwo={hobby} operation={combineObject} />
        <GValidatorComponent headerOne="Fruits" headerTwo="Vegetables" final="Combined Array" objectOne={fruitArray} objectTwo={vebetableArray} operation={combineArray} />
        <GValidatorComponent headerOne="First Part" headerTwo="Second Part" final="Total Parts" objectOne={partOne} objectTwo={partTwo} operation={combineAny} />
        <GValidatorComponent headerOne="Sprint Type" headerTwo="Sprint Action" final="Final" objectOne={sprintType} objectTwo={sprintAction} operation={combineAny} />
        <GValidatorComponent headerOne="Total" headerTwo="Action" final="Total Action" objectOne={partOne} objectTwo={sprintType} operation={combineAny} />
      </View>
    </ScrollView>
  );
};

export default UtilityValidator;
