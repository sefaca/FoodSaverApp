import React, {useState, useRef} from 'react';
import {Text, Modal, View, StyleSheet, TextInput} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonCameraContainer,
  Camera,
  CenteredView,
  Container,
  ModalText,
  ModalView,
  PendingView,
} from './styles';
import CameraButton from '../../common/ui/components/CameraButton';
import AddProductButton from '../../common/ui/components/AddProductButton';
import {useProducts} from '../AddFreshProduct/ProductsContext';

const PendingViewComponent = () => (
  <PendingView>
    <Text>Loading...</Text>
  </PendingView>
);

export const HomeScreen = () => {
  const [imageUri, setImageUri] = useState(null);
  const [recognizedText, setRecognizedText] = useState('');
  const [productName, setProductName] = useState('');
  const [foundDate, setFoundDate] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const cameraRef = useRef(null);
  const navigation = useNavigation();
  const {addProduct} = useProducts();

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setImageUri(data.uri);

    const textBlocks = await TextRecognition.recognize(data.uri);
    console.log('Text Blocks:', textBlocks);

    let foundDate = '';
    const dateRegex =
      /\b(\d{2}\/\d{2}(\/\d{4})?|\d{2}\/\d{4}|\d{1}\/\d{4}|\d{2}\d{4})\b/;
    for (let i = 0; i < textBlocks.length; i++) {
      const block = textBlocks[i];
      const matches = block.match(dateRegex);
      if (matches) {
        foundDate = matches[0];
        break;
      }
    }

    if (foundDate && /^\d{6}$/.test(foundDate)) {
      foundDate = foundDate.slice(0, 2) + '/' + foundDate.slice(2);
    }

    if (foundDate && /^\d{1}\/\d{4}$/.test(foundDate)) {
      foundDate = '0' + foundDate;
    }

    setFoundDate(foundDate);
    setRecognizedText(foundDate);
    console.log('Fecha reconocida:', foundDate);

    if (foundDate) {
      setModalVisible(true);
    }
  };

  // const handleAddProduct = () => {
  //   setModalVisible(false);
  //   navigation.navigate('AddProduct');
  // };

  const handleAddProduct = () => {
    addProduct({name: productName, image: imageUri});
    setModalVisible(false);
    setProductName('');
    setImageUri(null);
    navigation.navigate('Fridge');
  };

  return (
    <Container>
      <Camera
        ref={cameraRef}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <CenteredView>
          <ModalView>
            <ModalText>Fecha de caducidad: {foundDate}</ModalText>
            <TextInput
              placeholder="Nombre del producto"
              value={productName}
              onChangeText={setProductName}
              style={styles.input}
            />
            <AddProductButton onPress={handleAddProduct} />
          </ModalView>
        </CenteredView>
      </Modal>
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 8,
    marginLeft: 10,
    marginBottom: 10,
    width: '80%',
    borderRadius: 10,
  },
});

export default HomeScreen;
