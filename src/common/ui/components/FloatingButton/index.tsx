import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import type {Props} from './types';

const FloatingButton: FC<Props> = ({onPress, style}) => (
  <Container style={style}>
    <Pressable enabled={!!onPress} onPress={onPress}>
      <Ionicons name="add-circle-outline" size={40} color="gray" />
    </Pressable>
  </Container>
);

export default memo(FloatingButton);
