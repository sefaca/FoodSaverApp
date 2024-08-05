/* eslint-disable prettier/prettier */
import React from 'react';
import {Container, TextInputStyled} from './styles';
import type {Props} from './types';

const Placeholder: React.FC<Props> = ({
  style,
  placeholderInput,
  value,
  onChangeText,
  onSubmitEditing,
}) => (
  <Container style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
    <TextInputStyled
      placeholder={placeholderInput}
      placeholderTextColor="${({theme}) => theme.colors.tealGreen}"
      value={value}
      onChangeText={onChangeText}
      onSubmitEditing={onSubmitEditing}
      style={{flex: 1}}
    />
  </Container>
);

export default Placeholder;
