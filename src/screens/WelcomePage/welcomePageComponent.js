/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  View, Text, TextInput, NativeModules
} from 'react-native';
import { connect } from 'react-redux';
import { NavigationScreenProps } from '@react-navigation/native';
import { styles } from './styles';
import { mainActions } from '../../store/actions';
import { GNavigationButtonComponent } from '../../customComponent';

type welcomPageProps = NavigationScreenProps & {
  inputValue: string,
  isEmulator: string,
  setEmulatorInformation: (isEmulator: string) => string,
  setInputValue: (inputValue: String) => string,
};

export class WelcomPage extends React.Component<welcomPageProps> {
  componentDidMount() {
    const { setEmulatorInformation } = this.props;
    NativeModules.EmulatorInfo.isEmulator((err, value) => setEmulatorInformation(value));
  }

  changeInputValue = (text: string) => {
    const { setInputValue } = this.props;
    setInputValue(text);
  };

  render(): React.Node {
    const { inputValue, isEmulator } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.welcomeViewContainer}>
          <Text>
            Input Data :
            {inputValue}
          </Text>
        </View>
        <View style={styles.welcomeViewContainer}>
          <Text style={styles.noiceText}>
            App is running in Emulator:
            {isEmulator}
          </Text>
        </View>
        <GNavigationButtonComponent navProps={this.props} title="Go to MiddleStation" screenName="middleStation" />
        <GNavigationButtonComponent navProps={this.props} title="Go to Showcase" screenName="showcase" />
        <GNavigationButtonComponent navProps={this.props} title="Go to Utility Validator" screenName="utilityValidator" />
        <View style={styles.inputContainer}>
          <TextInput
            testID="txtInputValue"
            onChangeText={(text) => this.changeInputValue(text)}
            value={inputValue}
            placeholder="Type your name here"
            style={styles.input}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { inputValue, isEmulator } = state.main;
  return { inputValue, isEmulator };
};

const mapDispatchToProps = {
  ...mainActions,
};

export default connect(mapStateToProps, mapDispatchToProps)(WelcomPage);
