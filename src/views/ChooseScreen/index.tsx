import CircleButton from '../../common/ui/components/ChooseButton';
import {ButtonContainer, Container, Img} from './styles';
import {useNavigation} from '@react-navigation/native';
import {Icon} from 'react-native-elements';

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
          description="Añade nuevos alimentos frescos a tu despensa o frigorífico"
          onPress={handleAddFreshProductScreen}
          icon={
            <Icon name="lemon-o" type="font-awesome" size={40} color="white" />
          }
        />
        <CircleButton
          title="Añade un producto con caducidad"
          description="Añade nuevos productos que tengan fecha de caducidad a tu despensa o frigorífico"
          onPress={handleHomeScreen}
          icon={
            <Icon name="clock-o" type="font-awesome" size={40} color="white" />
          }
        />
      </ButtonContainer>
    </Container>
  );
};

export default ChooseScreen;
