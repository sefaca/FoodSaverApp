import React, {useState, useRef} from 'react';
import {Button, Text} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';
import {
  ButtonCameraContainer,
  Camera,
  Container,
  PendingView,
  TextRecognized,
} from './styles';
import CameraButton from '../../common/ui/components/CameraButton';

// Componente para mostrar una vista de carga mientras la cámara se inicializa
const PendingViewComponent = () => (
  <PendingView>
    <Text>Loading...</Text>
  </PendingView>
);

export const HomeScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const cameraRef = useRef(null);

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setImageUri(data.uri);

    // Reconocimiento de texto en la imagen capturada
    const textBlocks = await TextRecognition.recognize(data.uri);
    console.log('Text Blocks:', textBlocks);

    // Buscar la primera fecha con el formato xx/xx/xxxx, xx/xx, xx/xxxx o x/yyyy
    let foundDate = '';
    const dateRegex =
      /\b(\d{2}\/\d{2}(\/\d{4})?|\d{2}\/\d{4}|\d{1}\/\d{4}|\d{2}\d{4})\b/;
    for (let i = 0; i < textBlocks.length; i++) {
      const block = textBlocks[i];
      const matches = block.match(dateRegex);
      if (matches) {
        foundDate = matches[0];
        break; // Salir del bucle al encontrar la primera fecha
      }
    }

    // Si se encuentra un patrón como xx xxxx (sin separador), convertirlo a xx/xxxx
    if (foundDate && /^\d{6}$/.test(foundDate)) {
      foundDate = foundDate.slice(0, 2) + '/' + foundDate.slice(2);
    }

    // Si se encuentra un patrón como x/yyyy, agregar el cero delante del dígito del mes
    if (foundDate && /^\d{1}\/\d{4}$/.test(foundDate)) {
      foundDate = '0' + foundDate;
    }

    setRecognizedText(foundDate);
    console.log('Fecha reconocida:', foundDate);
  };

  return (
    <Container>
      <Camera
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {({camera, status}) => {
          if (status !== 'READY') {
            return <PendingViewComponent />;
          }
          return (
            <ButtonCameraContainer>
              <CameraButton
                title="Take Picture"
                onPress={() => takePicture(camera)}
              />
            </ButtonCameraContainer>
          );
        }}
      </Camera>

      <TextRecognized>{recognizedText}</TextRecognized>
    </Container>
  );
};

export default HomeScreen;
