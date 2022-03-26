import { Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import config from './TodoItem.component.config';
import styles from './TodoItem.styles';

/**
 * TodoItem
 * @param {Props} props - Props
 * @returns {React.Component} - TodoItem
 */
const TodoItem = (props) => {
  const { title } = props;
  
  return (
    <View style={styles.container}>
      <View style={styles.containerCheckBox}>
        <AntDesign name="check" size={24} color="black" />
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

TodoItem.displayName = config.displayName;
TodoItem.defaultProps = config.defaultProps;

export default TodoItem;