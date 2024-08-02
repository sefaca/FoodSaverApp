import React from 'react';
import {FlatList} from 'react-native';
import {Container} from './styles';
import Card from '../../common/ui/components/Card';
import {useProducts} from '../AddFreshProduct/ProductsContext';

export const Fridge = () => {
  const {products} = useProducts();

  return (
    <Container>
      <FlatList
        data={products}
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
