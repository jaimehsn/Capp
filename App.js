/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Home from './screens/home'

const stackNav = createStackNavigator();

const App = () => {

  const [todos, setTodos] = useState([
    { text: 'Cliente 1', state: '0', key: '1' },
    { text: 'Cliente 2', state: '1', key: '2' },
    { text: 'Cliente 3', state: '2', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      console.log(key)
      return prevTodos.filter(todos => todos.key != key)
    })
  }

  const submitHandler = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: text, key: ((prevTodos.length) + 1).toString() },
        ]
      })
    } else {
      Alert.alert('OOPS!', 'La tarea tiene que tener más de 3 letras.', [
        { text: 'Ok', onPress: () => console.log('alert closed') }
      ])
    }
  }

  return (
    // <Sandbox/>
    // <TouchableWithoutFeedback onPress={() => {
    //   Keyboard.dismiss()
    // }}>
    //   <View style={styles.container}>
    //     {/* para poner iconos <Icon name="check-circle" size={30} color="#000" /> */}
    //     {/* <View style={styles.content}>
    //       <AddTodo submitHandler={submitHandler} />
    //     </View> */}
    //     <View style={styles.list}>
    //       <FlatList
    //         data={todos}
    //         renderItem={({ item }) => (
    //           <TodoItem item={item} pressHandler={pressHandler} />
    //         )} />
    //     </View>
    //   </View>
    // </TouchableWithoutFeedback>
    <NavigationContainer>
      <stackNav.Navigator>
        <stackNav.Screen name='Home' component={Home}/>
      </stackNav.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
  }
});

export default App;
