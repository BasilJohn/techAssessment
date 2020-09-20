/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomePageScreen from './src/screens/WelcomePage/welcomePageComponent';
import MiddleStationScreen from './src/screens/MiddleStation/middleStationComponent';
import ShowCaseScreen from './src/screens/ShowCase/showCaseComponent';
import UtilityValidatorScreen from './src/screens/UtlityValidator/utilityValidatorComponent';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './src/store/reducers/reducer';

const Stack = createStackNavigator();
const store = createStore(mainReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="welcome" component={WelcomePageScreen} options={{title: 'Welcome'}} />
          <Stack.Screen name="middleStation" component={MiddleStationScreen} options={{title: 'Middle Station'}} />
          <Stack.Screen
            name="showcase"
            component={ShowCaseScreen}
            options={{title: 'Showcase'}}
          />
          <Stack.Screen
            name="utilityValidator"
            component={UtilityValidatorScreen}
            options={{title: 'Utility Validator'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
