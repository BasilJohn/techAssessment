
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
  operation?:Function
};

const validatorComponent = (props: validatorProps) => {
  return (
    <View style={styles.validatorContainer}>
      <Text style={styles.header}>{props.headerOne}</Text>
      <Text>{JSON.stringify(props.objectOne)}</Text>
      <Text style={styles.header}>{props.headerTwo}</Text>
      <Text>{JSON.stringify(props.objectTwo)}</Text>
      <Text style={styles.header}>{props.final}</Text>
      <Text>
        {JSON.stringify(props.operation(props.objectOne, props.objectTwo))}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  validatorContainer: {
    padding: 10,
  },
  header: {
    fontWeight: 'bold',
    margin: 5,
  },
});

export default validatorComponent;
