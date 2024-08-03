import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.greenSoft};
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text).attrs({
  variant: 'headline1',
})`
  color: ${({theme}) => theme.colors.white};
  text-align: center;
  margin-top: 12px;
`;

export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;
