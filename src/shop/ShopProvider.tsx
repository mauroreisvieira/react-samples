import * as React from "react";

import { ShopContext } from "./ShopContext";
import { useShopReducer } from "./ShopReducer";

import type { Book } from "../types/Book";
import { ReducerActionType } from "../types/Reducer";

import { Books } from "../api/books";

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [{ cart }, dispatch] = React.useReducer(useShopReducer, { cart: [] });

    const addProductToCart = (product: Book) => {
        dispatch({ type: ReducerActionType.ADD_PRODUCT, product: product });
    };

    const removeProductFromCart = (productId: Book["id"]) => {
        dispatch({
            type: ReducerActionType.REMOVE_PRODUCT,
            productId,
        });
    };

    return (
        <ShopContext.Provider
            value={{
                books: Books,
                cart,
                addProductToCart,
                removeProductFromCart,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};
