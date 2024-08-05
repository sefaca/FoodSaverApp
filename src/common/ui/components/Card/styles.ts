/* eslint-disable prettier/prettier */
import {Image as ImageBase} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View`
  flex-direction: row;
  width: 365px;
  height: auto;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const ProductData = styled.View`
  flex-direction: column;
  width: 66%;
  height: 80px;
  background-color: ${({theme}) => theme.colors.white};
  justify-content: center;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Image = styled(ImageBase)`
  height: 80px;
  width: 80px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;

`;

export const TitleProduct = styled(Text).attrs({
  variant: 'headline3-bold',
})`
  margin-left: 10px;
  color: ${({theme}) => theme.colors.greenSoft};
`;

export const ExpirationDate = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  margin-top: 5px;
  color: ${({theme}) => theme.colors.red};
  margin-left: 10px;
`;
