import CircleButton from '../../common/ui/components/ChooseButton';
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
      <Title>Food Saver!</Title>
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
