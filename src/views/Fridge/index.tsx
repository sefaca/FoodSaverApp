import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {Container, PlaceholderContainer} from './styles';
import Card from '../../common/ui/components/Card';
import {useProducts} from '../AddFreshProduct/ProductsContext';
import Placeholder from '../../common/ui/components/Placeholder';
import FloatingButton from '../../common/ui/components/FloatingButton';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../../common/ui/components/BackButton';

export const Fridge = () => {
  const {products} = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const navigation = useNavigation();

  const handleProductPress = (productName: string) => {
    setSelectedProducts(prevState =>
      prevState.includes(productName)
        ? prevState.filter(name => name !== productName)
        : [...prevState, productName],
    );
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container>
      <PlaceholderContainer>
        <BackButton />
        <Placeholder
          placeholderInput="Busca el producto"
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </PlaceholderContainer>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.name}
            expirationDate={item.expirationDate}
            onPress={() => handleProductPress(item.name)}
            selected={selectedProducts.includes(item.name)}
          />
        )}
      />
      <FloatingButton
        onPress={() =>
          navigation.navigate('RecipeScreen', {
            selectedIngredients: selectedProducts,
          })
        }
      />
    </Container>
  );
};

export default Fridge;
