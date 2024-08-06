import styled from 'styled-components/native';
import Text from '../../components/Text';

export const Container = styled.View`
  justify-content: center;
  margin-top: 60px;
  margin-left: 25px;
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  color: ${({theme}) => theme.colors.white};
`;
