import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Form = () => {

    return (

        <View style={styles.container}>
            <Text>
                Esto es un formulario
                </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
})


export default Form;