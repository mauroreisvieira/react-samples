import React, { Reducer, useReducer } from "react";

import { ShopContext } from "./ShopContext";
import { reducer } from "./ShopReducer";

import type { Book, Shop, ReducerAction } from "./types";

import { Books } from "../../api/Books";

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [{ cart, books }, dispatch] = useReducer<Reducer<Shop, ReducerAction>>(reducer, { cart: [], books: Books, });

    const addProductToCart = (product: Book) => {
        dispatch({ type: "ADD_PRODUCT", product });
    };

    const removeProductFromCart = (productId: Book["id"]) => {
        dispatch({
            type: "REMOVE_PRODUCT",
            productId,
        });
    };

    return (
        <ShopContext.Provider
            value={{
                books,
                cart,
                addProductToCart,
                removeProductFromCart,
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};
