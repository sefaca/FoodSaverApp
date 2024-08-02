import {RNCamera} from 'react-native-camera';
import styled from 'styled-components/native';
import {Animated} from 'react-native';
import Text from '../../common/ui/components/Text';

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.deepBlue};
`;

export const Camera = styled(RNCamera)`
  flex: 1;
  width: 100%;
`;

export const TextRecognized = styled.Text`
  font-size: 18px;
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  top: 50px;
  align-self: center;
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

export const DatePopup = styled(Animated.View)`
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.colors.deepBlue};
  justify-content: center;
  align-items: center;
`;

export const PopupText = styled.Text`
  color: white;
`;

export const CenteredView = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const ModalView = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 15px;
  align-items: center;
  shadowcolor: white;
  shadowopacity: 0.25;
  shadowradius: 4px;
  width: 100%;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
  padding: 15px;
  margin-left: 10px;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
`;

export const ImageModal = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 10px;
`;

export const ModalText = styled(Text).attrs({
  variant: 'body15-semibold',
})`
  margin-bottom: 15px;
  text-align: center;
`;
