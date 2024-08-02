/* eslint-disable prettier/prettier */
import React, {createContext, useState, useContext} from 'react';

const FreshProductContext = createContext();

export const FreshProductProvider = ({children}) => {
  const [freshProducts, setFreshProducts] = useState([]);

  const addFreshProduct = product => {
    setFreshProducts(prevProducts => [...prevProducts, product]);
  };

  return (
    <FreshProductContext.Provider value={{freshProducts, addFreshProduct}}>
      {children}
    </FreshProductContext.Provider>
  );
};

export const useFreshProducts = () => useContext(FreshProductContext);
