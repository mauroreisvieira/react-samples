import * as React from 'react';

import { ShopContext } from './ShopContext';
import { useShopReducer } from './ShopReducer';

import type { Product } from '../types/Product';
import { ReducerActionType } from '../types/Reducer';

export const ShopProvider = ( { children }: { children: React.ReactNode }) => {
    const products: Product[] = [
        { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
        { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
        { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
        { id: 'p4', title: 'Half-dried plant', price: 2.99 },
    ];

    const [{ cart }, dispatch] = React.useReducer(useShopReducer, { cart: [] });

    const addProductToCart = (product: Product) => {
        dispatch({ type: ReducerActionType.ADD_PRODUCT, product: product });
    };

    const removeProductFromCart = (productId: Product['id']) => {
        dispatch({ type: ReducerActionType.REMOVE_PRODUCT, productId: productId });
    };

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

