// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import AsyncStrorage from '@react-native-community/async-storage';

import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';

export default function App() {

  const DATA = [
    { todo: 'todo1', id: '1' },
    { todo: 'todo2', id: '2' },
    { todo: 'todo3', id: '3' },
  ]

  const [data, setData] = useState([])

  const getData = async () => {
    const dataFromStorage = await AsyncStrorage.getItem('abcd')
    console.log(JSON.parse(dataFromStorage));
    setData(JSON.parse(dataFromStorage));
  }

  const saveData = () => {
    console.log(data && 1)
    if (data) {
      console.log('cleanup', data)
      const dataToStore = JSON.stringify(data)
      AsyncStrorage.setItem('abcd', dataToStore)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  useEffect(() => {
    saveData()
  }, [data])

  const presshandler = (id) => {
    setData((currentState) => currentState.filter((item) => item.id != id))
  }

  const submitHandler = (todo) => {
    if (todo.length > 3) {
      setData((currentState) => [...currentState, { todo, id: Date.now().toString() }])
    }
    else {
      console.log('Add some todo')
      Alert.alert('Error', 'Add some Todo that is more that 3 letters long', [
        { text: 'Understood', onPress: () => console.log('alert closed') }
      ])
    }
    // console.log(data)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {/*
      * TouchableWithoutFeedback is basically a touchabl componenet which doesnot affecct the styling of components
      * wrapped under it
     */}
      {/*
      * Keyboard.dismiss dismisses the keyboard
     */}
      <View style={styles.container}>
        {/* Header */}
        <Header />
        {/* todo Content */}
        <View style={styles.content}>
          <AddTodo onSubmitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <TodoItem item={item} onPressHandler={presshandler} />
                // <Text>{item.todo}</Text>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
