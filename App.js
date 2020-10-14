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
const App = () => {


  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  const pressHandler = (key) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key)
    })
  }

  // const pressHandler = (key) => {
  //   console.log(key);
  //   // Haciendo uso de la funcion setPeople coge todos los elementos
  //   // del array menos el elemento que se ha tocado haciendo uso de
  //   // la funcion filter
  //   setPeople((prevPeople) => {
  //     return prevPeople.filter(person => person.key != key)
  //   })
  // }

  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler}/>
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
