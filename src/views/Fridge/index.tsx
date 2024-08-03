import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Container} from './styles';
import Card from '../../common/ui/components/Card';
import {useProducts} from '../AddFreshProduct/ProductsContext';
import Placeholder from '../../common/ui/components/Placeholder';

export const Fridge = () => {
  const {products} = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const navigation = useNavigation();

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Container>
      <Placeholder
        placeholderInput="Busca el producto"
        value={searchTerm}
        onChangeText={setSearchTerm}
        onBackPress={() => navigation.goBack()}
      />
      <FlatList
        data={filteredProducts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.name}
            onPress={() => console.log(item.name)}
          />
        )}
      />
    </Container>
  );
};

export default Fridge;
