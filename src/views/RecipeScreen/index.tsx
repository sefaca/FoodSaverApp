import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import axios from 'axios';
import {Container, TextRecipe, RecipeCard, Title} from './styles';

const COHERE_API_KEY = 'Koz1OE0Vq0du00ugHmasJnm1d1HhH5GCThUoygFF';

export const RecipeScreen = () => {
  const route = useRoute();
  const {selectedIngredients} = route.params;
  const [recipes, setRecipes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!selectedIngredients || selectedIngredients.length === 0) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.post(
          'https://api.cohere.ai/generate',
          {
            model: 'command-r-plus',
            prompt: `Sugiere algunas recetas que se puedan elaborar con los siguientes ingredientes: ${selectedIngredients.join(
              ', ',
            )}. Proporcione una receta concisa para cada sugerencia.`,
            max_tokens: 300,
          },
          {
            headers: {
              Authorization: `Bearer ${COHERE_API_KEY}`,
              'Content-Type': 'application/json',
            },
          },
        );

        if (response.data && response.data.text) {
          setRecipes(
            response.data.text.split('\n').filter(line => line.trim() !== ''),
          );
        } else {
          console.error('Unexpected response structure:', response.data);
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [selectedIngredients]);

  return (
    <Container>
      <Title>Suggested Recipes</Title>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <ScrollView>
          {recipes.length > 0 ? (
            recipes.map((recipe, index) => (
              <RecipeCard key={index}>
                <TextRecipe>{recipe}</TextRecipe>
              </RecipeCard>
            ))
          ) : (
            <TextRecipe>No recipes found.</TextRecipe>
          )}
        </ScrollView>
      )}
    </Container>
  );
};

export default RecipeScreen;
