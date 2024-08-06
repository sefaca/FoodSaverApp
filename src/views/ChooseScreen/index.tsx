import CircleButton from '../../common/ui/components/ChooseButton';
import {Img} from '../../common/ui/components/ChooseButton/styles';
import {ButtonContainer, Container, Title} from './styles';
import {useNavigation} from '@react-navigation/native';

export const ChooseScreen = () => {
  const navigation = useNavigation();

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  const handleAddFreshProductScreen = () => {
    navigation.navigate('AddFreshProduct');
  };

  return (
    <Container>
      <Img source={require('../../assets/imgs/logo1.png')} />
      <ButtonContainer>
        <CircleButton
          title="Añade un producto fresco"
          onPress={handleAddFreshProductScreen}
        />
        <CircleButton
          title="Añade un producto con caducidad"
          onPress={handleHomeScreen}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ChooseScreen;
