import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import type {Props} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const BackButton: FC<Props> = ({style}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Container style={style}>
      <TouchableOpacity onPress={handlePress}>
        <Icon name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
    </Container>
  );
};

export default memo(BackButton);
