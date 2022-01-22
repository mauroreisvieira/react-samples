import type { Product } from "./Product";

export type Shop = {
  products: Product[];
  cart: Product[];
  addProductToCart: (product: Product) => void;
  removeProductFromCart: (productId: Product['id']) => void,
}
