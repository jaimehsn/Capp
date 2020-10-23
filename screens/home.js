import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableWithoutFeedback, Dimensions } from 'react-native';
import TodoItem from '../components/todoItem'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        { text: 'Last', state: '2', key: '9' },

    ])

    const pressHandler = (item) => {
        navigation.navigate('Form', {
            item: item,
        })
        console.log(item.key)
    }

    const pressOnIcon = (item) => {
        // setTodos(todos.map(todo=>{
        //     todo.key === item.key 
        // })
    }

    const footer = () => {
        return (
            <View style={styles.FlatListFooter}>
                <View>
                    <Icon name={'plus'} size={100} color="lightgray" />
                </View>
            </View>
        )
    }

    return (

        <View style={styles.container}>
            <View style={styles.list}>
                <FlatList
                    style={styles.flatListStyle}
                    data={todos}
                    ListFooterComponent={footer}
                    renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler} pressOnIcon={pressOnIcon} />
                    )} />
            </View>
            <Icon name={'history'} size={100} color="gray" style={styles.floatingButtonHistory} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',

    },
    content: {
        flex: 1,
        padding: 40,
    },
    list: {
        flex: 1,

    },
    FlatListFooter: {
        justifyContent: 'center',
    },
    floatingButtonHistory: {
        position: 'absolute',
        right: 30,
        bottom: 30,
    },

})


export default Home;