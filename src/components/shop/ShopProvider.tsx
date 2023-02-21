import * as React from "react";

import { ShopContext } from "./ShopContext";
import { useShopReducer } from "./ShopReducer";

import type { Book } from "./types";
import { ReducerActionType } from "./types";

import { Books } from "../../api/Books";

export const ShopProvider = ({ children }: { children: React.ReactNode }) => {
    const [{ cart }, dispatch] = React.useReducer(useShopReducer, { cart: [] });

    const addProductToCart = (product: Book) => {
        dispatch({ type: ReducerActionType.ADD_PRODUCT, product });
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
