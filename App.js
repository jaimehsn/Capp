/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Alert, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from './screens/home'
import Form from './screens/form'
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Non-serializable values were found in the navigation state',
]);

const stackNav = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <stackNav.Navigator screenOptions={{
        headerShown: true,
      }}>
        <stackNav.Screen name='Home' component={Home} options={{
          title: 'Inicio',
          headerStyle: {
            backgroundColor: '#cecece',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',

          },
          headerTitleAlign: 'center',
          headerRight: () => (
            <Icon name={'history'} size={50} color="#fff" onPress={() => { alert("Funciona") }} />
          ),
          headerRightContainerStyle: {
            paddingHorizontal: 20
          }
        }} />
        <stackNav.Screen name='Form' component={Form} options={{
          headerShown: false
        }} />
      </stackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
