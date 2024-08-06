import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import type {Props} from './types';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BackButton: FC<Props> = ({onPress, style}) => (
  <Container style={style}>
    <TouchableOpacity enabled={!!onPress} onPress={onPress}>
      <Icon name="arrow-back-outline" size={30} color="white" />
    </TouchableOpacity>
  </Container>
);

export default memo(BackButton);
