import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 55px;
  height: 55px;
  background-color: ${({theme}) => theme.colors.white};
  justify-content: center;
  align-items: center;
  shadow-color: #000;
  shadow-radius: 4px;
  elevation: 5;
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray};
  border-radius: 55px;
  margin: 5px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 55px;
  width: 55px;
  height: 55px;
  justify-content: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;
