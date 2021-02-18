import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Props } from './types';

const fecha = new Date();
const dd = fecha.getDay();
const mm = fecha.getMonth();
const yyyy = fecha.getFullYear();
const hh = fecha.getHours();
const min = fecha.getMinutes();

const state = ['play-circle', 'pause-circle', 'check-circle'];
const color = ['#00A3FF', '#FCF200', '#40C800'];

const TodoItem: FC<Props> = ({ title, state, handlePress, handlePressIcon }) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: color[state] }, styles.container]}
      onPress={() => {
        handlePress(item);
      }}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.text}</Text>
      </View>

      <View style={styles.content}>
        <Icon
          name={state[item.state]}
          size={60}
          color="#fff"
          onPress={() => {
            handlePressIcon(item);
          }}
        />
        <Text>
          {dd}/{mm}/{yyyy} | {hh}:{min}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 10,
    paddingBottom: 10,
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
});

export default TodoItem;
