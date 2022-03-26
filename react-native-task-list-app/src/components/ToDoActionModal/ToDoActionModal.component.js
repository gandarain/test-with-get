import React from 'react';
import { Text, View, Modal, TouchableOpacity, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import config from './ToDoActionModal.config';
import { Colors } from '../../constants';
import styles from './ToDoActionModal.styles';

/**
 * GeneralText
 * @param {VoidFunction} onClose - onClose
 * @param {string} title - title
 * @returns {React.FC<Props>} - Component
 */
const renderTitle = (onClose, title) => (
  <View style={styles.containerTitle}>
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity onPress={onClose}>
      <AntDesign name="closecircle" size={25} color={Colors.RED} />
    </TouchableOpacity>
  </View>
);

/**
 * renderTextInput
 * @param {string} textInputValue - textInputValue
 * @param {VoidFunction} onChangeTextInput - onChangeTextInput
 * @returns {React.Node} - renderTextInput
 * @private
 */
const renderTextInput = (textInputValue, onChangeTextInput) => (
  <View style={styles.containerTextInput}>
    <TextInput
      style={styles.textInput}
      onChangeText={value => onChangeTextInput(value)}
      value={textInputValue}
      placeholder="Todo item name"
    />
  </View>
);

/**
 * renderButtonSubmit
 * @param {string} textInputValue - textInputValue
 * @param {VoidFunction} onSubmit - onSubmit
 * @returns {React.Node} - renderButtonSubmit
 * @private
 */
const renderButtonSubmit = (textInputValue, onSubmit) => (
  <TouchableOpacity
    disabled={!textInputValue}
    style={styles.button}
    onPress={onSubmit}
  >
    <Text style={styles.buttonText}>SUBMIT</Text>
  </TouchableOpacity>
);

/**
 * ToDoActionModal
 * @param {Object} props - Props
 * @returns {React.Component} - ToDoActionModal
 * @constructor
 */
const ToDoActionModal = props => {
  const {
    visible,
    onClose,
    title,
    textInputValue,
    onChangeTextInput,
    onSubmit,
  } = props;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View activeOpacity={1} style={styles.container}>
        <View style={styles.content}>
          {renderTitle(onClose, title)}
          {renderTextInput(textInputValue, onChangeTextInput)}
          {renderButtonSubmit(textInputValue, onSubmit)}
        </View>
      </View>
    </Modal>
  );
};

ToDoActionModal.displayName = config.displayName;
ToDoActionModal.defaultProps = config.defaultProps;

export default ToDoActionModal;
