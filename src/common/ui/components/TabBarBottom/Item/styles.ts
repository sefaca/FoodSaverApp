/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';
import {TouchableOpacity, Text} from 'react-native';

export const ItemContainer = styled(TouchableOpacity)`
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

export const ItemText = styled(Text)<{isFocused: boolean}>`
  color: ${({isFocused, theme}) =>
    isFocused ? theme.colors.primary : theme.colors.white};
  font-weight: ${({isFocused}) => (isFocused ? 'bold' : 'normal')};
`;
