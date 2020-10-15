/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

const App = () => {

  const [todos, setTodos] = useState([])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      console.log(key)
      return prevTodos.filter(todos => todos.key != key)
    })
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        {text: text, key: ((prevTodos.length)+1).toString()},
      ]
    })

  }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});

export default App;
