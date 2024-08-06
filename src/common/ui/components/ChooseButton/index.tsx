import type {FC} from 'react';
import {memo} from 'react';
import React from 'react';
import {
  Container,
  Description,
  IconContainer,
  Pressable,
  Title,
} from './styles';
import type {Props} from './types';

const CircleButton: FC<Props> = ({
  icon,
  title,
  description,
  onPress,
  style,
}) => (
  <Container style={style}>
    <Pressable enabled={!!onPress} onPress={onPress}>
      {icon && <IconContainer>{icon}</IconContainer>}
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Pressable>
  </Container>
);

export default memo(CircleButton);
