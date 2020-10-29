import { StyleSheet, Dimensions } from 'react-native';
import * as colorConstants from '../../constants/colorConstants';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorConstants.darkBG,
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
  variationButtonContainer: {
    width: '100%',
  },
  variationHeaderText: {
    color: colorConstants.variationHeaderColor,
    textAlign: 'center',
  },
  buttonStyle: {
    width: '90%',
    alignSelf: 'center',
    height: Dimensions.get('window').height * 0.07,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonTextStyle: {
    color: colorConstants.blueText,
    textAlign: 'center',
  },
  buttonTwoStyle: {
    backgroundColor: colorConstants.blueButtonBG,
  },
  buttonThreeStyle: {
    backgroundColor: colorConstants.darkButtonBG,
  },
  whiteText: {
    color: colorConstants.white,
    textAlign: 'center',
  },
  slidingButtonStyle: {
    width: '100%',
    marginTop: 30,
  },
  inputValueStyle: {
    color: colorConstants.white,
  }
});
export default styles;
