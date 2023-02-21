import * as React from "react";

import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Button } from "../components/Button";
import { Alert } from "../components/alert";

import { useShop } from "../components/shop";

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
            <Main>
                {cart.length === 0 ? (
                    <Alert skin="warning">
                        <p className="font-bold">No Item in the Cart!</p>
                        <p className="text-sm">
                            Make sure you know how these changes affect you.
                        </p>
                    </Alert>
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
            </Main>
        </>
    );
};

export default CartPage;
