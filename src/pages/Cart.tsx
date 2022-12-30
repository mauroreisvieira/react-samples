import * as React from "react";

import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import { Button } from "../components/Button";

import { useShop } from "../shop";

const CartPage: React.FC = () => {
    const { cart, removeProductFromCart } = useShop();

    const quantity = React.useMemo(
        () => cart.reduce((count, curItem) => count + curItem.quantity, 0),
        [cart]
    );

    const totalPrice = React.useMemo(
        () => cart.reduce((count, curItem) => count + curItem.price, 0),
        [cart]
    );

    return (
        <>
            <Navigation cartCount={quantity} />
            <Layout>
                {cart.length === 0 ? (
                    <div
                        className="bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md"
                        role="alert"
                    >
                        <div className="flex">
                            <div className="py-1">
                                <svg
                                    className="fill-current h-6 w-6 text-yellow-500 mr-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold">
                                    No Item in the Cart!
                                </p>
                                <p className="text-sm">
                                    Make sure you know how these changes affect
                                    you.
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
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
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Quantity
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
                                                {cart.map(
                                                    ({
                                                        id,
                                                        title,
                                                        price,
                                                        quantity,
                                                    }) => (
                                                        <tr key={id}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                                {title}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {price}€
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                                {quantity}
                                                            </td>
                                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                                <Button
                                                                    skin="danger"
                                                                    onClick={() =>
                                                                        removeProductFromCart(
                                                                            id
                                                                        )
                                                                    }
                                                                >
                                                                    Remove
                                                                </Button>
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
                        <div className="flex items-baseline justify-end my-6 py-2 border-t">
                            <p className="order-1 text-gray-400 text-xl mr-2">
                                Total:{" "}
                            </p>
                            <p className="order-1 text-gray-900 text-3xl font-medium">
                                {Number.parseFloat(
                                    totalPrice.toString()
                                ).toFixed(2)}
                                €
                            </p>
                        </div>
                    </>
                )}
            </Layout>
        </>
    );
};

export default CartPage;
