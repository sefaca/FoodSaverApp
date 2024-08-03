import React, {useState, useRef} from 'react';
import {Text, Modal, View, TextInput, StyleSheet, Image} from 'react-native';
import {RNCamera} from 'react-native-camera';
import TextRecognition from 'react-native-text-recognition';
import {useNavigation} from '@react-navigation/native';
import {
  ButtonCameraContainer,
  Camera,
  CenteredView,
  Container,
  ImageModal,
  ModalText,
  ModalView,
  PendingView,
  ProductInfo,
} from './styles';
import CameraButton from '../../common/ui/components/CameraButton';
import AddProductButton from '../../common/ui/components/AddProductButton';
import {useProducts} from './ProductsContext';

const PendingViewComponent = () => (
  <PendingView>
    <Text>Loading...</Text>
  </PendingView>
);

export const AddFreshProduct = () => {
  const [imageUri, setImageUri] = useState(null);
  const [productName, setProductName] = useState('');
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

    setModalVisible(true);
  };

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
            <ProductInfo>
              {imageUri && <ImageModal source={{uri: imageUri}} />}
              <TextInput
                placeholder="Nombre del producto"
                value={productName}
                onChangeText={setProductName}
                style={styles.input}
              />
            </ProductInfo>
            <AddProductButton
              title="Agregar Producto"
              onPress={handleAddProduct}
            />
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
    width: '80%',
    borderRadius: 10,
  },
});

export default AddFreshProduct;
