import { Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import config from './TodoItem.config';
import styles from './TodoItem.styles';

/**
 * TodoItem
 * @param {Props} props - Props
 * @returns {React.Component} - TodoItem
 * @constructor
 */
const TodoItem = (props) => {
  const { title, onCheck, status, onPressItem } = props;
  
  return (
    <TouchableOpacity onPress={() => onPressItem()} style={styles.container}>
      <TouchableOpacity onPress={() => onCheck()} style={styles.containerCheckBox}>
        {status && <AntDesign name="check" size={24} color="black" />}
      </TouchableOpacity>
      <View style={styles.containerTitle}>
        <Text style={styles.title(status)}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

TodoItem.displayName = config.displayName;
TodoItem.defaultProps = config.defaultProps;

export default TodoItem;