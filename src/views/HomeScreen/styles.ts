import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.deepBlue};
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 100%;
  margin-top: 50px;
`;

export const TextRecognized = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  margin-top: 50px;
`;

export const PendingView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ButtonCameraContainer = styled.View`
  position: absolute;
  bottom: 20px;
  width: 100%;
  align-items: center;
`;
