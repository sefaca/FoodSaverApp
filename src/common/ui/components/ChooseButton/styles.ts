import styled from 'styled-components/native';
import Text from '../Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray};
  width: 370px;
  height: 280px;
  border-radius: 15px;
  margin: 5px;
  margin-bottom: 50px;
  margin-top: -30px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 55px;
  width: 370px;
  height: 280px;
  justify-content: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  variant: 'headline3',
})`
  color: ${({theme}) => theme.colors.black};
  font-weight: bold;
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
  margin-bottom: 10px;
`;

export const Description = styled(Text).attrs({
  variant: 'body20',
})`
  color: ${({theme}) => theme.colors.gray2};
  text-align: center;
  padding-right: 20px;
  padding-left: 20px;
`;

export const IconContainer = styled.View`
  width: 70px;
  height: 70px;
  border-radius: 40px;
  background-color: ${({theme}) => theme.colors.greenSoft};
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
