import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Login = ({ route, navigation }) => {
  const { setLogin, isLogin } = route.params;
  const enter = () => {
    setLogin(!isLogin);
  };

  return (
    <View style={styles.container}>
      <View style={styles.login}>
        <TextInput style={styles.fileText} placeholder="User"></TextInput>
        <TextInput style={styles.fileText} placeholder="Pass"></TextInput>
        <View>
          <Text
            style={styles.button}
            onPress={() => {
              enter();
            }}>
            Iniciar sesión
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    width: '100%',
    padding: 40,
  },
  fileText: {
    margin: 10,
    color: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: 'white',
    borderRadius: 3,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#40C800',
    borderRadius: 3,
  },
});

export default Login;
