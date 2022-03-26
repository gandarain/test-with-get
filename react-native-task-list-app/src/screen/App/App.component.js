import React , { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import { Entypo } from '@expo/vector-icons';

import { ToDoList } from '../../components';
import Utils from '../../utils';
import { Colors } from '../../constants';

const {
  Todo: {
    generateTodoList,
    updateStatus
  }
} = Utils

const onRefresh = (state) => () => {
  state.setTodoList([])
  state.setLoading(true)
  setTimeout(() => {
    state.setTodoList(generateTodoList())
    state.setLoading(false)
  }, 3000);
}

const getTodoList = (state) => {
  state.setLoading(true);
  state.setTodoList(generateTodoList())
  state.setLoading(false);
}

const useGetTodoList = (state) => {
  useEffect(() => {
    getTodoList(state)
  }, []);
}

const getState = () => {
  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/roboto/Roboto-Bold.ttf'),
    'Roboto-Reguler': require('../../assets/fonts/roboto/Roboto-Regular.ttf'),
  });
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(true)

  return {
    fontsLoaded,
    todoList,
    setTodoList,
    loading,
    setLoading
  }
}

const renderTitle = () => (
  <View style={styles.containerTitle}>
    <Text style={styles.title}>Todo List</Text>
    <TouchableOpacity>
      <Entypo name="menu" size={30} color="black" />
    </TouchableOpacity>
  </View>
)

const App = () => {
  const state = getState();
  
  useGetTodoList(state);

  if (!state.fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.content}>
        {renderTitle()}
        <ToDoList
          todoList={state.todoList}
          onRefresh={onRefresh(state)}
          loading={state.loading}
          onCheck={(toDoItem) => {
            state.setTodoList(updateStatus(state.todoList, toDoItem))
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    margin: 20
  },
  containerTitle: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontFamily: 'Roboto-Bold',
    color: Colors.BLACK
  }
});

export default App;
