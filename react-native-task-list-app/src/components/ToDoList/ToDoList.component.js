import { FlatList } from 'react-native';

import ToDoItem from "../ToDoItem";
import config from './ToDoList.config';

/**
 * ToDoList
 * @param {Props} props - Props
 * @returns {React.Component} - ToDoList
 */
const ToDoList = (props) => {
  const {
    todoList,
    onRefresh,
    loading,
    onCheck
  } = props;
  
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={todoList}
      renderItem={({ item }) => (
        <ToDoItem
          title={item.title}
          onCheck={() => onCheck(item)}
          status={item.status}
        />
      )}
      keyExtractor={item => item.id}
      refreshing={loading}
      onRefresh={onRefresh}
    />
  )
}

ToDoList.displayName = config.displayName;
ToDoList.defaultProps = config.defaultProps;

export default ToDoList;