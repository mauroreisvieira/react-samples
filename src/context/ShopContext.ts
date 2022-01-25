/* eslint-disable @typescript-eslint/no-empty-function */
import * as React from 'react';
import type { Shop } from '../types/Shop';

const ShopContext = React.createContext<Shop>({
  products: [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const useShopContext = (): Shop => React.useContext(ShopContext);

export default ShopContext;
