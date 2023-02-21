import { createContext, useContext } from 'react';
import type { Shop } from './types';

const definitionError = (): null => {
  throw new Error(
    'Please make sure "ShopProvider" component is wrapping your application.'
  );
};

export const ShopContext = createContext<Shop>({
  books: [],
  cart: [],
  addProductToCart: () => definitionError,
  removeProductFromCart: () => definitionError,
});

export const useShop = (): Shop => useContext(ShopContext);
