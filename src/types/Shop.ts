import type { Product } from "./Product";

export type Cart =  Product & { quantity: number; };

export type Shop = {
  products: Product[];
  cart: Cart[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: Product['id']) => void,
}

