/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, Alert, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './screens/home'
import Form from './screens/form'

const stackNav = createStackNavigator();

const App = () => {
  // const submitHandler = (text) => {

  //   if (text.length > 3) {
  //     setTodos((prevTodos) => {
  //       return [
  //         ...prevTodos,
  //         { text: text, key: ((prevTodos.length) + 1).toString() },
  //       ]
  //     })
  //   } else {
  //     Alert.alert('OOPS!', 'La tarea tiene que tener más de 3 letras.', [
  //       { text: 'Ok', onPress: () => console.log('alert closed') }
  //     ])
  //   }
  // }
  return (
    <NavigationContainer>
      <stackNav.Navigator screenOptions={{
        headerShown: false
      }}>
        <stackNav.Screen name='Home' component={Home} />
        <stackNav.Screen name='Form' component={Form}/>
      </stackNav.Navigator>
    </NavigationContainer>
  );
};

export default App;
