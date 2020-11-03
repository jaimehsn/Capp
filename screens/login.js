import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import { State } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5'


const Login = ({}) => {
    return (
        <View style={styles.holaMundo}>
            <Text>
                Hola mundo
             </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    holaMundo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Login;