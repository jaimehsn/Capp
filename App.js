/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard,  } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'
import Icon from 'react-native-vector-icons/FontAwesome'

const App = () => {

  const [todos, setTodos] = useState([])

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
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log("dismissed keyboard")
    }}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <Icon name="check-circle" size={30} color="#000" />
        <View style={styles.content}>
          {/* form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    
    flex:1
  },
  list: {
    marginTop: 20,
    
    flex:1,
  }
});

export default App;
