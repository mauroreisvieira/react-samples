import * as React from 'react';

import { useShopContext } from '../context/ShopContext';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';

const CartPage: React.FC = () => {
    const { cart, removeProductFromCart } = useShopContext();

    return (
        <>
            <Navigation
                cartCount={cart.reduce(
                    (count, curItem) => count + curItem.quantity,
                    0
                )}
            />
            <Layout>
                <div>
                    {cart.length <= 0 && <p>No Item in the Cart!</p>}
                    <ul>
                        {cart.map(({ id, title, price, quantity }) => (
                            <li key={id}>
                                <div>
                                    <strong>{title}</strong> - ${price} (
                                    {quantity})
                                </div>
                                <div>
                                    <button onClick={() => removeProductFromCart(id)}>
                                        Remove from Cart
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </Layout>
        </>
    );
};

export default CartPage;
