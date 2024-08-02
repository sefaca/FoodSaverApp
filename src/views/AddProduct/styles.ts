/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  background-color: ${({theme}) => theme.colors.greenSoft};
`;

export const Text = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  top: 50px;
  align-self: center;
`;