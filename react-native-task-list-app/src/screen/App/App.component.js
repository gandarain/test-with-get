import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  View,
  SafeAreaView,
  Text
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';
import { Entypo } from '@expo/vector-icons';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

import { ToDoList, ToDoActionModal } from '../../components';
import Utils from '../../utils';
import { Colors } from '../../constants';
import styles from './App.styles'

const {
  Todo: {
    updateStatus,
    updateTitle,
    createTodoItem,
    deleteCompletedTask
  },
  Data: {
    isEmptyObject
  }
} = Utils

/**
 * renderMenu
 * @param {Object} state - state
 * @returns {React.Component} - renderTitle
 * @private
 */
const renderMenu = (state) => (
  <Menu>
    <MenuTrigger>
      <Entypo name="menu" size={30} color={Colors.BLACK} />
    </MenuTrigger>
    <MenuOptions>
      <MenuOption onSelect={() => state.setShowModal(true)}>
        <View style={styles.containerMenu}>
          <Entypo name="pencil" size={20} color="black" />
          <View style={styles.containerMenuTitle}>
            <Text styles={styles.menuTitle}>Create new task</Text>
          </View>
        </View>
      </MenuOption>
      <MenuOption onSelect={() => state.setTodoList(deleteCompletedTask(state.todoList))}>
        <View style={styles.containerMenu}>
          <Entypo name="trash" size={20} color="black" />
          <View style={styles.containerMenuTitle}>
            <Text styles={styles.menuTitle}>Delete complete task</Text>
          </View>
        </View>
      </MenuOption>
    </MenuOptions>
  </Menu>
)

/**
 * renderTitle
 * @param {Object} state - state
 * @returns {React.Component} - renderTitle
 * @private
 */
const renderTitle = (state) => (
  <View style={styles.containerTitle}>
    <Text style={styles.title}>Todo List</Text>
    {renderMenu(state)}
  </View>
)

/**
 * onSubmitModal
 * @param {Object} state - state
 * @returns {React.Component} - onSubmitModal
 * @private
 */
const onSubmitModal = (state) => {
  if (!isEmptyObject(state.editTodoItem)){
    state.setTodoList(updateTitle(
      state.todoList,
      state.editTodoItem,
      state.newTodoItem
    ))
  } else {
    state.setTodoList(createTodoItem(state.todoList, state.newTodoItem))
  }
  state.setEditTodoItem({})
  state.setNewTodoItem('')
  state.setShowModal(false)
}

/**
 * renderModal
 * @param {Object} state - state
 * @returns {React.Component} - ToDoActionModal
 * @private
 */
const renderModal = (state) => (
  <ToDoActionModal
    visible={state.showModal}
    onClose={() => {
      state.setEditTodoItem({})
      state.setNewTodoItem('')
      state.setShowModal(false)
    }}
    title="Todo Item"
    textInputValue={state.newTodoItem}
    onChangeTextInput={(value) => state.setNewTodoItem(value)}
    onSubmit={() => onSubmitModal(state)}
  />
);

/**
 * renderToDoList
 * @param {Object} state - state
 * @returns {React.Component} - ToDoList
 * @private
 */
const renderToDoList = (state) => (
  <ToDoList
    todoList={state.todoList}
    onCheck={(toDoItem) => {
      state.setTodoList(updateStatus(state.todoList, toDoItem))
    }}
    onPressItem={(item) => {
      state.setNewTodoItem(item.title)
      state.setShowModal(true)
      state.setEditTodoItem(item)
    }}
  />
);

/**
 * getState
 * @returns {Object} - ToDoList
 * @private
 */
const getState = () => {
  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/roboto/Roboto-Bold.ttf'),
    'Roboto-Reguler': require('../../assets/fonts/roboto/Roboto-Regular.ttf'),
  });
  const [todoList, setTodoList] = useState([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [newTodoItem, setNewTodoItem] = useState('')
  const [editTodoItem, setEditTodoItem] = useState({})

  return {
    fontsLoaded,
    todoList,
    setTodoList,
    loading,
    setLoading,
    showModal,
    setShowModal,
    newTodoItem,
    setNewTodoItem,
    editTodoItem,
    setEditTodoItem
  }
}

/**
 * App
 * @returns {React.Component} - App
 * @constructor
 */
const App = () => {
  const state = getState();
  
  if (!state.fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.content}>
        {renderTitle(state)}
        {renderToDoList(state)}
      </SafeAreaView>
      {renderModal(state)}
    </View>
  );
};

export default App;
