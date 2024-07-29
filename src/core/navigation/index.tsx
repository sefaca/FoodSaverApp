import type {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Blank} from '../../views/Blank';
import {HomeScreen} from '../../views/HomeScreen';
import {generalStackScreenOptions, rootStackScreenOptions} from './constants';
// import {Tabs} from './Tabs';
import type {RootParamsList} from './types';
import AddProduct from '../../views/AddProduct';

const {Navigator, Group, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: FC = () => (
  <Navigator screenOptions={rootStackScreenOptions}>
    <Group screenOptions={generalStackScreenOptions}>
      {/* <Screen name="Tabs" component={Tabs} /> */}
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="Blank" component={Blank} />
      <Screen name="AddProduct" component={AddProduct} />
    </Group>
  </Navigator>
);

export default AppNavigator;
