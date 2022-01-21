import * as React from 'react';

import ShopContext from '../context/ShopContext';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';

const CartPage: React.FC = () => {
    const context = React.useContext(ShopContext);

    return (
        <>
            <Navigation
                cartCount={context.cart.reduce(
                    (count, curItem) => count + curItem.quantity,
                    0
                )}
            />
            <Layout>
                <div>
                    {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
                    <ul>
                        {context.cart.map(({ id, title, price, quantity }) => (
                            <li key={id}>
                                <div>
                                    <strong>{title}</strong> - ${price} (
                                    {quantity})
                                </div>
                                <div>
                                    <button
                                        onClick={() =>
                                            context.removeProductFromCart(id)
                                        }
                                    >
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
