import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import TodoItem from '../components/todoItem'
import Icon from 'react-native-vector-icons/FontAwesome'


const Home = ({ navigation }) => {

    const [todos, setTodos] = useState([
        { text: 'Cliente 1', state: '0', key: '1' },
        { text: 'Cliente 2', state: '1', key: '2' },
        { text: 'Cliente 3', state: '2', key: '3' },
        { text: 'Last', state: '2', key: '9' },
    ])
    const [newName, setNewName] = useState('')

    const [modalVisible, setModalVisible] = useState(false);

    const newTodo = (nombre) => {
        setTodos((prevTodos) => {
            return [{ text: nombre, state: '0', key: ((todos.length) + 1).toString() }, ...prevTodos]
        })
    }
    const modObj = (todo, keyTarget) => {
        if (todo.key == keyTarget) {
            return { text: todo.text, state: '0', key: todo.key }
        } else {
            return todo
        }
    }

    const trashHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(item => item.key != key)
        })
    }

    const pressHandler = (item) => {
        navigation.navigate('Form', {
            item: item,
            trashHandler: trashHandler,
        })
        console.log(item.key)
    }

    const pressOnIcon = (item) => {
        setTodos(todos.map((todo) => {
            if (todo.key == item.key) {
                if(todo.state =='2'){
                    return todo
                }else{
                    if (todo.state == '0') {
                        return { text: todo.text, state: '1', key: todo.key }
                    } else {
                        return { text: todo.text, state: '0', key: todo.key }
                    }
                }
            } else {
                return todo
            }
        }))
    }

    const footer = () => {
        return (
            <TouchableOpacity>
                <View style={styles.FlatListFooter}>
                    <View>
                        <Icon name={'plus'} size={100} color="lightgray" onPress={() => {
                            setModalVisible(!modalVisible)
                        }} />

                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (

        <View style={styles.container}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredModal}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>Nueva incidencia</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Icon name={'times'} size={50} color="red" />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.modalBody}>
                            <TextInput style={styles.inputModal} placeholder={"Nombre del afectado"} onChangeText={(val) => {
                                setNewName(val)
                            }}></TextInput>
                            <TouchableOpacity
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                    newTodo(newName)
                                    console.log(newName)
                                }}
                            >
                                <Icon name={'check'} size={50} color="#40C800" />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
            <View style={styles.list}>
                <FlatList
                    style={styles.flatListStyle}
                    data={todos}
                    ListFooterComponent={footer}
                    renderItem={({ item }) => (
                        <TodoItem item={item} pressHandler={pressHandler} pressOnIcon={pressOnIcon} />
                    )} />
            </View>

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
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },
    floatingButtonHistory: {
        position: 'absolute',
        right: 30,
        bottom: 30,
    },
    centeredModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        marginVertical: 10,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 50,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 10,
    },
    inputModal: {
        borderBottomWidth: 2,
        borderColor: 'lightgray',
        width: 200,
        fontSize: 20,
        marginBottom: 10
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: 'stretch'
    },
    modalBody: {

        alignItems: 'center'
    },

})


export default Home;