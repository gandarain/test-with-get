import React from 'react';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Colors } from '../../constants';
import styles from './PopUpMenu.styles';

/**
 * renderMenuTrigger
 * @returns {React.Component} - renderMenuTrigger
 * @constructor
 */
const renderMenuTrigger = () => (
  <MenuTrigger>
    <Entypo name="menu" size={30} color={Colors.BLACK} />
  </MenuTrigger>
);

/**
 * renderMenuOption
 * @param {Object} item - item
 * @returns {React.Component} - renderMenuTrigger
 * @constructor
 */
const renderMenuOption = item => (
  <MenuOption onSelect={() => item.onSelect()}>
    <View style={styles.containerMenu}>
      <Entypo name={item.icon} size={20} color={Colors.BLACK} />
      <View style={styles.containerMenuTitle}>
        <Text styles={styles.menuTitle}>{item.title}</Text>
      </View>
    </View>
  </MenuOption>
);

/**
 * renderMenuOptions
 * @param {Array} props - props
 * @returns {React.Component} - renderMenuTrigger
 * @constructor
 */
const renderMenuOptions = props => (
  <MenuOptions>
    {props.item.map(item => {
      return renderMenuOption(item);
    })}
  </MenuOptions>
);

/**
 * renderMenu
 * @param {Object} props - props
 * @returns {React.Component} - renderTitle
 * @constructor
 */
const PopUpMenu = props => (
  <Menu>
    {renderMenuTrigger()}
    {renderMenuOptions(props)}
  </Menu>
);

export default PopUpMenu;
