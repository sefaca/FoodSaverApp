import React from 'react';
import {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Container, Text, Title} from './styles';

const AddProductButton = ({onPress, style}) => (
  <Container>
    <TouchableOpacity onPress={onPress}>
      <Title>Añadir Producto</Title>
    </TouchableOpacity>
  </Container>
);

AddProductButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default memo(AddProductButton);
