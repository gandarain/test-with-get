import React from 'react';
import { registerRootComponent } from 'expo';
import { MenuProvider } from 'react-native-popup-menu';

import App from './screen/App';

/**
 * renderMenu
 * @returns {React.Component} - Root
 * @constructor
 */
function Root() {
  return (
    <MenuProvider>
      <App />
    </MenuProvider>
  );
}

export default registerRootComponent(Root);
