/**
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Dimensions,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import * as colorConstants from '../constants/colorConstants';

type Props = {
  endAction: () => void,
};
type State = {
  bgColor: number
};
class SlidingButton extends React.Component<Props, State> {
  deviceWidth = Dimensions.get('window').width;

  calculatedWidth = 0;

  animatedWidth = new Animated.Value(0);

  position = new Animated.ValueXY();

  bgPanHandler = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => true,
    onPanResponderMove: (event, gesture) => {
      const runningPC = (gesture.dx / this.deviceWidth) * 100;
      if (runningPC < 0) {
        Animated.timing(this.animatedWidth, {
          toValue: 20,
          duration: 0,
          useNativeDriver: false,
        }).start();
      } else if (runningPC > 71.5) {
        Animated.timing(this.animatedWidth, {
          toValue: 100,
          duration: 0,
          useNativeDriver: false,
        }).start();
        this.props.endAction();
      } else {
        Animated.timing(this.animatedWidth, {
          toValue: 20 + runningPC,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      const bgColorRunning = this.animatedWidth._value === 0 ? 0 : runningPC;
      this.setState({ bgColor: bgColorRunning });
    },
    onPanResponderRelease: (event, gesture) => {
      const runningPC = (gesture.dx / this.deviceWidth) * 100;
      if (runningPC < 71.5) {
        Animated.timing(this.animatedWidth, {
          toValue: 20,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }
      const bgColorRunning = this.animatedWidth._value === 0 ? 0 : runningPC;
      this.setState({ bgColor: bgColorRunning });
      this.animatedWidth.flattenOffset();
    },
  });

  constructor(props:Object) {
    super(props);
    this.state = {
      bgColor: 0
    };
  }

  render(): React.Node {
    return (
      <View style={styles.container}>
        <View style={[styles.iconContainer]}>
          <View style={[styles.textContainer]}>
            <Text testID="txtSlideText" style={[styles.slideTxt]}>
              Slide me to continue
            </Text>
          </View>
          <Animated.View
            {...this.bgPanHandler.panHandlers}
            style={[
              styles.button,
              {
                width:
                  this.state.bgColor === 0
                    ? '20%'
                    : `${this.animatedWidth._value}%`,
              },
            ]}
          >
            <View style={styles.icon}>
              <Icon name="diamond" size={20} style={styles.iconText} />
            </View>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  iconContainer: {
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    height: 60,
    borderWidth: 1,
    borderColor: colorConstants.dragButtonBorderColor,
    backgroundColor: colorConstants.dragButtonBGColor,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: '100%',
    backgroundColor: colorConstants.dragColor,
  },
  icon: {
    height: '100%',
    width: Dimensions.get('window').width / 5.6,
    backgroundColor: colorConstants.darkButtonBG,
    alignSelf: 'flex-end',
    borderRadius: 10,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  iconText: {
    textAlign: 'center',
    color: colorConstants.white,
  },
  slideTxt: {
    color: colorConstants.white,
    textAlign: 'center',
  },
  textContainer: {
    position: 'absolute',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});

export default SlidingButton;
