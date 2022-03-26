import { registerRootComponent } from 'expo';
import { MenuProvider } from 'react-native-popup-menu';

import App from './screen/App';

const Root = () => (
  <MenuProvider>
    <App />
  </MenuProvider>
)

export default registerRootComponent(Root);