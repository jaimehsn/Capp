import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback } from 'react-native';
import TodoItem from '../components/todoItem'

const Home = ({ navigation }) => {

    const [todos, setTodos] = useState([
        { text: 'Cliente 1', state: '0', key: '1' },
        { text: 'Cliente 2', state: '1', key: '2' },
        { text: 'Cliente 3', state: '2', key: '3' },
        { text: 'Cliente 3', state: '2', key: '4' },
        { text: 'Cliente 3', state: '2', key: '5' },
        { text: 'Cliente 3', state: '2', key: '6' },
        { text: 'Cliente 3', state: '2', key: '7' },
        { text: 'Cliente 3', state: '2', key: '8' },
        { text: 'Cliente 3', state: '2', key: '9' },
        { text: 'Last', state: '2', key: '10' },

    ])

    const pressHandler = (key) => {
        navigation.navigate('Form')
    }

    return (

        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    data={todos}
                    renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler} />
                    )} />
            </View>
        </View>
    );
}

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
})


export default Home;