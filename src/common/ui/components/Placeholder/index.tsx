/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, TextInputStyled} from './styles';
import type {Props} from './types';

const Placeholder: React.FC<Props> = ({
  style,
  placeholderInput,
  value,
  onChangeText,
  onSubmitEditing,
  onBackPress,
}) => (
  <Container style={[{flexDirection: 'row', alignItems: 'center'}, style]}>
    <TouchableOpacity onPress={onBackPress} style={{marginRight: 10}}>
      <Icon name="arrow-back-outline" size={24} color="white" />
    </TouchableOpacity>
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
