/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Container, Image, TitleRecipe, Description} from './styles';
import type {Props} from './types';

const Card: React.FC<Props> = ({image, title, nutriScore, description, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <Image source={{uri: image}} />
        <TitleRecipe numberOfLines={1}>{title}</TitleRecipe>
        {nutriScore && (
          <Text style={{marginVertical: 5, fontWeight: 'bold'}}>Nutri-Score: {nutriScore.toUpperCase()}</Text>
        )}
        {/* <Description numberOfLines={2}>{description}</Description> */}
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
