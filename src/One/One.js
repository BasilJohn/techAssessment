/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {styles} from './styles';
import {connect} from 'react-redux';
import {setInputValue, setEmulatorInformation} from '../actions/mainActions';
import {bindActionCreators} from 'redux';
import {NativeModules} from 'react-native';
import {NavigationScreenProps} from '@react-navigation/native';

type OneProps = NavigationScreenProps & {
  inputValue: string,
  isEmulator: string,
  setEmulatorInformation: (isEmulator: string) => string,
  setInputValue: (inputValue: String) => string,
};

export class One extends React.Component<OneProps> {
  componentDidMount() {
    NativeModules.EmulatorInfo.isEmulator((err, value) =>
      this.props.setEmulatorInformation(value),
    );
  }

  navigateToScreen = (screenName: string) => {
    this.props.navigation.navigate(screenName);
  };
  changeInputValue = (text: string) => {
    this.props.setInputValue(text) 
  };

  render(): React.Node {
    return (
      <View style={styles.container}>
        <View style={styles.welcomeViewContainer}>
          <Text>Input Data :{this.props.inputValue}</Text>
        </View>
        <View style={styles.welcomeViewContainer}>
          <Text style={styles.noiceText}>
            App is running in Emulator:{this.props.isEmulator}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.navigateToScreen('Two')}
            style={styles.button}>
            <Text style={styles.textStyle}>Go to screen two</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.navigateToScreen('Three')}
            style={styles.button}>
            <Text style={styles.textStyle}>Go to screen three</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => this.navigateToScreen('utilityValidator')}
            style={styles.button}>
            <Text style={styles.textStyle}>Go to Utility Validator</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            testID={'txtInputValue'}
            onChangeText={text => this.changeInputValue(text)}
            value={this.props.inputValue}
            placeholder="Type your name here"
            style={styles.input}></TextInput>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {inputValue, isEmulator} = state.main;
  return {inputValue, isEmulator};
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setInputValue,
      setEmulatorInformation,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(One);
