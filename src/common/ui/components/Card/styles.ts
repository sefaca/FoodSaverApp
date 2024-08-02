/* eslint-disable prettier/prettier */
import {Image as ImageBase} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

export const Container = styled.View`
  flex-direction: row;
  width: 365px;
  height: auto;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  align-items: center;
`;

export const Image = styled(ImageBase)`
  height: 80px;
  width: 80px;
  border-bottom-left-radius: 8px;
  border-top-left-radius: 8px;
`;

export const TitleRecipe = styled(Text).attrs({
  variant: 'headline3-bold',
})`
  margin-left: 10px;
  color: ${({theme}) => theme.colors.blueBold};
  flex-shrink: 1;
`;

export const Description = styled(Text).attrs({
  variant: 'body17-semibold',
  numberOfLines: 2,
})`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 3px;
  color: ${({theme}) => theme.colors.blueMedium};
`;
