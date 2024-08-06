/* eslint-disable prettier/prettier */
import React from 'react';
import {ItemContainer} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  isFocused: boolean;
  jumpTo: (screen: string) => void;
  routeName: string;
  routeKey: string;
}

const iconsMap: { [key: string]: string } = {
  ChooseScreen: 'home',
  Fridge: 'fast-food-outline',
  RecipeScreen: 'receipt',
};

const TouchableItem: React.FC<Props> = ({isFocused, jumpTo, routeName}) => {
  const iconName = iconsMap[routeName];

  return (
    <ItemContainer onPress={() => jumpTo(routeName)}>
      <Icon name={iconName} size={30} color={isFocused ? '#6200ee' : '#757575'} />
    </ItemContainer>
  );
};

export default TouchableItem;
