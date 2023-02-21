/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import type { Shop } from './types';

export const ShopContext = React.createContext<Shop>({
  books: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const useShop = (): Shop => React.useContext(ShopContext);
