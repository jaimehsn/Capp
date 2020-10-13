/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TextInput } from 'react-native';


const App = () => {

  const [name, setName] = useState('mario')
  const [age, setAge] = useState('30')

  const clickHandler = () => {
    setPerson({name:'luigi', age: (person.age +1)})
  }

  return (
    <View style={styles.container}>
      <Text>His name is {name}  and his age is {age}</Text>
      <TextInput/>
      <View style={styles.buttonContainer}>
        <Button title='Update name' onPress={clickHandler} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderStartColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
});

export default App;
