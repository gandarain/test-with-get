import React , { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from '@expo-google-fonts/inter';

const renderTodoItem = (title) => (
  <View style={{ paddingLeft: 20, backgroundColor: 'yellow', paddingVertical: 15, borderBottomColor: 'red', borderBottomWidth: 1, flexDirection: 'row' }}>
    <View style={{ width: 30, height: 30, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
      <AntDesign name="check" size={24} color="black" />
    </View>
    <View style={{ justifyContent: 'center', paddingLeft: 20 }}>
      <Text style={{ fontSize: 15, fontFamily: 'Roboto-Reguler' }}>{title}</Text>
    </View>
  </View>
)

const renderTodoList = (todoList) => (
  todoList.map((item) => (
    renderTodoItem(item.title)
  ))
)

const App = () => {
  let [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../assets/fonts/roboto/Roboto-Bold.ttf'),
    'Roboto-Reguler': require('../../assets/fonts/roboto/Roboto-Regular.ttf'),
  });
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      title: 'Get a new light bulb for kitchen'
    },
    {
      id: 2,
      title: 'Call the doctor'
    },
    {
      id: 3,
      title: 'Workout'
    }
  ])

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.content}>
        {renderTodoList(todoList)}
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
  }
});

export default App;
