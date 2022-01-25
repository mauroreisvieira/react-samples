import * as React from 'react';

import type { Product } from '../types/Product';
import type { Shop } from '../types/Shop';
import { ReducerActionType } from '../types/Reducer';
import type { ReducerAction } from '../types/Reducer';

const addProductToCart = (product: Product, state: Shop) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
        updatedCart.push({ ...product, quantity: 1 });
    } else {
        const updatedItem = {
            ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
    }

    return { ...state, cart: updatedCart };
};

const removeProductFromCart = (productId: Product['id'], state: Shop) => {
    const updatedCart = [...state.cart];
    const updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === productId
    );

    const updatedItem = {
        ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
    } else {
        updatedCart[updatedItemIndex] = updatedItem;
    }
    return { ...state, cart: updatedCart };
};

export const useShopReducer: React.Reducer<Shop, ReducerAction> = (state, action): Shop => {
    switch (action.type) {
        case ReducerActionType.ADD_PRODUCT:
            return addProductToCart(action.product, state);
        case ReducerActionType.REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, state);
        default:
            return state;
    }
};
