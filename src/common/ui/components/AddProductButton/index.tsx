import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {Container, Pressable, Title} from './styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {Icon} from 'react-native-elements';
import type {Props} from './types';

const CameraButton: FC<Props> = ({onPress, style}) => (
  <Container style={style}>
    <Pressable enabled={!!onPress} onPress={onPress}>
      {/* <Icon name="camera-alt" color="gray" size={28} /> */}
      <Title>Añadir Producto</Title>
    </Pressable>
  </Container>
);

export default memo(CameraButton);
