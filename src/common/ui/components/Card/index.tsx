import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Container, Image, ProductData, TitleProduct} from './styles';
import type {Props} from './types';

const Card: React.FC<Props> = ({
  image,
  title,
  // nutriScore,
  // description,
  onPress,
  selected,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container>
        <CheckBox value={selected} onValueChange={onPress} />
        <Image source={{uri: image}} style={{marginLeft: 10}} />
        <ProductData>
          <TitleProduct numberOfLines={1}>{title}</TitleProduct>
          {/* {nutriScore && (
            <Text style={{marginVertical: 5, fontWeight: 'bold'}}>
              Nutri-Score: {nutriScore.toUpperCase()}
            </Text>
          )} */}
          {/* <Description numberOfLines={2}>{description}</Description> */}
        </ProductData>
      </Container>
    </TouchableOpacity>
  );
};

export default Card;
