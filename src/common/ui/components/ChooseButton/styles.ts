import styled from 'styled-components/native';
import Text from '../Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray};
  width: 300px;
  height: 55px;
  border-radius: 55px;
  margin: 5px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 55px;
  width: 300px;
  height: 55px;
  justify-content: center;
  align-self: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.greenSoft};
`;
