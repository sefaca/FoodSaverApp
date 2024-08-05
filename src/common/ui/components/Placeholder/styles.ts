/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 40px;
  border-color: ${({theme}) => theme.colors.white};
  border-width: 1px;
  margin: 10px;
  width: 80%;
  padding-horizontal: 10px;
  border-radius: 16px;
  justify-content: center;
  margin-top: 70px;
  margin-right: 30px;
`;

export const TextInputStyled = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.white,
}))`
  color: ${({theme}) => theme.colors.white};
  font-size: 15px;
  font-weight: bold;
  height: 100%;
  width: 100%;
`;
