import { FlatList } from 'react-native';

import ToDoItem from "../ToDoItem";
import config from './ToDoList.config';

/**
 * ToDoList
 * @param {Object} props - Props
 * @returns {React.Component} - ToDoList
 * @constructor
 */
const ToDoList = (props) => {
  const {
    todoList,
    onCheck,
    onPressItem
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
          onPressItem={() => onPressItem(item)}
        />
      )}
      keyExtractor={item => item.id}
    />
  )
}

ToDoList.displayName = config.displayName;
ToDoList.defaultProps = config.defaultProps;

export default ToDoList;