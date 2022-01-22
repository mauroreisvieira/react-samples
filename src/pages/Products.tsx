import * as React from 'react';

import ShopContext from '../context/ShopContext';
import Navigation from '../components/Navigation';
import Layout from '../components/Layout';

const ProductsPage: React.FC = () => {
    return (
        <ShopContext.Consumer>
            {(context) => (
                <>
                    <Navigation
                        cartCount={context.cart.reduce(
                            (count, curItem) => count + curItem.quantity,
                            0
                        )}
                    />
                    <Layout>
                        <div className="flex flex-col">
                            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Name
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Price
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="relative px-6 py-3"
                                                    >
                                                        <span className="sr-only">
                                                            Action
                                                        </span>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {context.products.map(
                                                    (product) => (
                                                        <tr key={product.id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                                {product.title}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {product.price}€
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <button
                                                                    className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'
                                                                    onClick={() =>
                                                                        context.addProductToCart(
                                                                            product
                                                                        )
                                                                    }
                                                                >
                                                                    Add to Cart
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    )
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Layout>
                </>
            )}
        </ShopContext.Consumer>
    );
};

export default ProductsPage;
