export type Book = {
    id: string;
    title: string;
    category?: string;
    price: number;
};

export const ReducerActionType = {
    ADD_PRODUCT: "ADD_PRODUCT",
    REMOVE_PRODUCT: "REMOVE_PRODUCT",
} as const;

export type ReducerAction =
    | { type: typeof ReducerActionType.ADD_PRODUCT; product: Book }
    | { type: typeof ReducerActionType.REMOVE_PRODUCT; productId: Book["id"] };

export type Cart = Book & { quantity: number };

export type Shop = {
    cart: Cart[];
    books: Book[];
    addProductToCart?: (product: Book) => void;
    removeProductFromCart?: (productId: Book["id"]) => void;
};
