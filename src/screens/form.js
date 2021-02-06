import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Form = ({ route, navigation }) => {
  const { item, trashHandler, pressOnIcon } = route.params;
  const [todo, setTodo] = useState(item);

  const state = ['play-circle', 'pause-circle', 'check-circle'];
  const color = ['#00A3FF', '#FCF200', '#40C800'];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name={'signature'}
          size={30}
          color="#fff"
          onPress={() => {
            pressOnIcon({ text: todo.text, state: '2', key: todo.key });
            setTodo({ text: todo.text, state: '2', key: todo.key });
            navigation.goBack();
          }}
        />
        <Text style={styles.fileText}>{todo.text}</Text>
        <Icon
          name={'times-circle'}
          size={40}
          color="#fff"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      <ScrollView style={styles.files}>
        <Text style={styles.fileText}>Nº Siniestro</Text>
        <TextInput style={styles.fileInput}></TextInput>
        <Text style={styles.fileText}>Nº Poliza</Text>
        <TextInput style={styles.fileInput}></TextInput>
        <Text style={styles.fileText}>Nº Compañia</Text>
        <TextInput style={styles.fileInput}></TextInput>
        <Text style={styles.fileText}>Nº Teléfono</Text>
        <TextInput style={styles.fileInput}></TextInput>
        <Text style={styles.fileText}>Población</Text>
        <TextInput style={styles.fileInput}></TextInput>
        <Text style={styles.fileText}>Dirección</Text>
        <TextInput style={styles.fileInput}></TextInput>
        <Text style={styles.fileText}>Descripción</Text>
        <TextInput multiline={true} numberOfLines={4} style={styles.fileTextArea}></TextInput>
        <View style={styles.controls}>
          <Icon
            name={state[todo.state]}
            size={40}
            color={color[todo.state]}
            onPress={() => {
              pressOnIcon(todo);
              if (todo.state != '2') {
                if (todo.state == '0') {
                  setTodo({ text: todo.text, state: '1', key: todo.key });
                } else {
                  setTodo({ text: todo.text, state: '0', key: todo.key });
                }
              }
            }}
          />
          <Icon
            name={'trash-alt'}
            size={40}
            color="#FF0000"
            onPress={() => {
              trashHandler(item.key);
              navigation.goBack();
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'lightgray',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  files: {
    flex: 1,
    paddingHorizontal: 25,
  },
  fileText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  fileInput: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  fileTextArea: {
    backgroundColor: 'white',
    borderRadius: 15,
  },
  controls: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
});

export default Form;
