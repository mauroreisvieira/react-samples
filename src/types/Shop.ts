import type { Book } from "./Book";

export type Cart =  Book & { quantity: number; };

export type Shop = {
  books: Book[];
  cart: Cart[];
  addProductToCart: (product: Book) => void;
  removeProductFromCart: (productId: Book['id']) => void,
}

