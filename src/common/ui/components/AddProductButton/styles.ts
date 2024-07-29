import styled from 'styled-components/native';
import Text from '../../components/Text';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.greenSoft};
  border-width: 2px;
  border-color: ${({theme}) => theme.colors.gray};
  width: 100%;
  height: 50px;
  border-radius: 55px;
  margin: 5px;
`;

export const Pressable = styled(RectButton)`
  align-items: center;
  border-radius: 55px;
  width: 100%;
  height: 50px;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;
