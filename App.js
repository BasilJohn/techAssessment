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
import One from './src/One/One';
import Two from './src/Two/Two';
import Three from './src/Three/Three';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import mainReducer from './src//reducers/reducer';

const Stack = createStackNavigator();
const store = createStore(mainReducer);

const App = () => {
  return (
    <Provider isEmulator={"isEmulator"} store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="One" component={One} options={{title: 'One'}} />
          <Stack.Screen name="Two" component={Two} options={{title: 'Two'}} />
          <Stack.Screen
            name="Three"
            component={Three}
            options={{title: 'Three'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
