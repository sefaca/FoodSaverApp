import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '../../views/HomeScreen';
import {ChooseScreen} from '../../views/ChooseScreen';
import {AddFreshProduct} from '../../views/AddFreshProduct';
import {Fridge} from '../../views/Fridge';
import {AddProduct} from '../../views/AddProduct';
import {RecipeScreen} from '../../views/RecipeScreen';
import TabBarBottom from '../../common/ui/components/TabBarBottom';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator tabBar={props => <TabBarBottom {...props} />}>
    <Tab.Screen
      name="ChooseScreen"
      component={ChooseScreen}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="Fridge"
      component={Fridge}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="RecipeScreen"
      component={RecipeScreen}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AddFreshProduct"
      component={AddFreshProduct}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="AddProduct"
      component={AddProduct}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppNavigator;
