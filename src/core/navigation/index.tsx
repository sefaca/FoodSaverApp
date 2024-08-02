import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../views/HomeScreen';
import {generalStackScreenOptions, rootStackScreenOptions} from './constants';
import AddProduct from '../../views/AddProduct';
import {ChooseScreen} from '../../views/ChooseScreen';
import AddFreshProduct from '../../views/AddFreshProduct';
import {Fridge} from '../../views/Fridge';
import type {RootParamsList} from './types';

const {Navigator, Group, Screen} = createNativeStackNavigator<RootParamsList>();

const AppNavigator: React.FC = () => (
  <Navigator screenOptions={rootStackScreenOptions}>
    <Group screenOptions={generalStackScreenOptions}>
      <Screen name="ChooseScreen" component={ChooseScreen} />
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="AddFreshProduct" component={AddFreshProduct} />
      <Screen name="Fridge" component={Fridge} />
      <Screen name="AddProduct" component={AddProduct} />
    </Group>
  </Navigator>
);

export default AppNavigator;
