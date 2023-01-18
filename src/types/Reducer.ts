import type { Book } from './Book';

// eslint-disable-next-line no-unused-vars
export enum ReducerActionType { ADD_PRODUCT, REMOVE_PRODUCT };

export type ReducerAction =
    | { type: ReducerActionType.ADD_PRODUCT; product: Book; }
    | { type: ReducerActionType.REMOVE_PRODUCT; productId: Book['id']; }
