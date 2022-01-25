import type { Product } from './Product';

// eslint-disable-next-line no-unused-vars
export enum ReducerActionType { ADD_PRODUCT, REMOVE_PRODUCT };

export type ReducerAction =
    | { type: ReducerActionType.ADD_PRODUCT; product: Product; }
    | { type: ReducerActionType.REMOVE_PRODUCT; productId: Product['id']; }
