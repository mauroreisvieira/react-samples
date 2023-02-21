import React from "react";

import type { Book, Shop, ReducerAction } from "./types";
import { ReducerActionType } from "./types";

const addProductToCart = (product: Book, state: Shop) => {
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

const removeProductFromCart = (productId: Book["id"], state: Shop) => {
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

export const reducer: React.Reducer<Shop, ReducerAction> = (
    state,
    action
): Shop => {
    switch (action.type) {
        case ReducerActionType.ADD_PRODUCT:
            return addProductToCart(action.product, state);
        case ReducerActionType.REMOVE_PRODUCT:
            return removeProductFromCart(action.productId, state);
        default:
            return state;
    }
};
