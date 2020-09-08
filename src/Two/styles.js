import {StyleSheet, Dimensions} from 'react-native';
import * as colorConstants from '../constants/colorConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    width: '90%',
    height: Dimensions.get('window').height * 0.1,
    backgroundColor: colorConstants.navigationButtonColor,
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
  },
  welcomeViewContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 0.05,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
  },
});
