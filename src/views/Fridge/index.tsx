import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import {Container} from './styles';
import Card from '../../common/ui/components/Card';
import {useProducts} from '../AddFreshProduct/ProductsContext';
import Placeholder from '../../common/ui/components/Placeholder';
import FloatingButton from '../../common/ui/components/FloatingButton';
import {useNavigation} from '@react-navigation/native';

export const Fridge = () => {
  const {products} = useProducts();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const navigation = useNavigation();

  const toggleSelection = item => {
    setSelectedItems(prevSelected =>
      prevSelected.includes(item)
        ? prevSelected.filter(i => i !== item)
        : [...prevSelected, item],
    );
  };

  const handleButtonPress = () => {
    navigation.navigate('RecipeSuggestions', {selectedItems});
  };

  return (
    <Container>
      <Placeholder
        placeholderInput="Busca el producto"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={products}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Card
            image={item.image}
            title={item.name}
            onPress={() => toggleSelection(item)}
          />
        )}
      />
      <FloatingButton onPress={handleButtonPress} />
    </Container>
  );
};

export default Fridge;
