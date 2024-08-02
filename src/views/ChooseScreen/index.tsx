import CircleButton from '../../common/ui/components/ChooseButton';
import {ButtonContainer, Container, Text, Title} from './styles';
import type {Props} from './types';
import {useNavigation} from '@react-navigation/native';

export const ChooseScreen = () => {
  const navigation = useNavigation();

  const handleHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <Container>
      <Title>Food Saver!</Title>
      <ButtonContainer>
        <CircleButton title="Añade un producto fresco" />
        <CircleButton
          title="Añade un producto con caducidad"
          onPress={handleHomeScreen}
        />
      </ButtonContainer>
    </Container>
  );
};

export default ChooseScreen;
