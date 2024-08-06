import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({theme}) => theme.colors.greenSoft};
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const ButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  width: 250px;
  height: 250px;
  resize-mode: contain;
`;
