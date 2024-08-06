import styled from 'styled-components/native';
import Text from '../../common/ui/components/Text';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.greenSoft};
  flex: 1;
  justify-content: center;
  padding: 20px;
`;

export const TextRecipe = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  margin-bottom: 15px;
  color: #333;
`;

export const RecipeCard = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled(Text).attrs({
  variant: 'body17-semibold',
})`
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
  text-align: center;
`;
