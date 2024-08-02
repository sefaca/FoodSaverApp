import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Card from '../../common/ui/components/Card';
import {Container} from './styles';
import Placeholder from '../../common/ui/components/Placeholder';

export const AddProduct = () => {
  const [foods, setFoods] = useState([]);
  const [filteredFoods, setFilteredFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch(
          'https://world.openfoodfacts.org/api/v0/search.json?search_terms=food&search_simple=1&action=process&json=true&page_size=100000', // Load a large number of products
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setFoods(data.products);
        setFilteredFoods(data.products.slice(0, 10)); // Initial preview of 10 products
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredFoods(foods.slice(0, 10)); // Reset to initial preview if search term is empty
    } else {
      const filtered = foods.filter(
        food =>
          food.product_name &&
          food.product_name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredFoods(filtered);
    }
  }, [searchTerm, foods]);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#0000ff" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Text>Error fetching foods: {error}</Text>
      </Container>
    );
  }

  return (
    <Container>
      <Placeholder
        placeholderInput="Busca el producto"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <FlatList
        data={filteredFoods}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Card
            image={item.image_url}
            title={item.product_name}
            onPress={() => console.log(item.product_name)}
          />
        )}
      />
    </Container>
  );
};

export default AddProduct;
