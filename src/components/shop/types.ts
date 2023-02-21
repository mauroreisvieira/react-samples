export type Book = {
    id: string;
    title: string;
    category?: string;
    price: number;
}

// eslint-disable-next-line no-unused-vars
export enum ReducerActionType { ADD_PRODUCT, REMOVE_PRODUCT };

export type ReducerAction =
    | { type: ReducerActionType.ADD_PRODUCT; product: Book; }
    | { type: ReducerActionType.REMOVE_PRODUCT; productId: Book['id']; }

export type Cart =  Book & { quantity: number; };

export type Shop = {
  books: Book[];
  cart: Cart[];
  addProductToCart: (product: Book) => void;
  removeProductFromCart: (productId: Book['id']) => void,
}

