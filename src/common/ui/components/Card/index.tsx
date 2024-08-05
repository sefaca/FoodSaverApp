/* eslint-disable prettier/prettier */
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  Container,
  Image,
  ProductData,
  TitleProduct,
  ExpirationDate,
} from './styles';
import type {Props} from './types';

const Card: React.FC<Props> = ({
  image,
  title,
  expirationDate,
  onPress,
  selected,
}) => {
  return (
    <Container>
      <CheckBox value={selected} onValueChange={onPress} />
      <Image source={{uri: image}} style={{marginLeft: 10}} />
      <ProductData>
        <TitleProduct numberOfLines={1}>{title}</TitleProduct>
        {expirationDate && (
          <ExpirationDate numberOfLines={1}>
            Caducidad: {expirationDate}
          </ExpirationDate>
        )}
      </ProductData>
    </Container>
  );
};

export default Card;
