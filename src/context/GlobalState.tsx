import * as React from 'react';
import type { Product } from '../types/Product';

import ShopContext from './ShopContext';
import { ShopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from './ShopReducer';

const GlobalState: React.FC = ( { children }) => {
    const products: Product[] = [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 },
    ];

    const [cartState, dispatch] = React.useReducer(ShopReducer, { cart: [] });

    const addProductToCart = (product: Product) => {
        setTimeout(() => {
            dispatch({ type: ADD_PRODUCT, product: product });
        }, 100);
    };

    const removeProductFromCart = (productId: Product['id']) => {
        setTimeout(() => {
            dispatch({ type: REMOVE_PRODUCT, productId: productId });
        }, 700);
    };

    const { cart } = cartState;

    return (
        <ShopContext.Provider
            value={{
                products,
                cart,
                addProductToCart,
                removeProductFromCart,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export default GlobalState;
