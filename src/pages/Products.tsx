import React, { useMemo, useState } from "react";

import Navigation from "../Layout/Navigation";
import Main from "../Layout/Main";
import { Button } from "../components/Button";
import { Highlighted } from "../components/Highlighted";
import { Table } from "../components/Table";

import { useShop } from "../shop";

const ProductsPage = (): React.ReactElement => {
    const { books: products, cart, addProductToCart } = useShop();
    const [input, setInput] = useState("");

    const quantity = useMemo(
        () => cart.reduce((count, curItem) => count + curItem.quantity, 0),
        [cart]
    );

    const filterProducts = useMemo(() => {
        return products.filter((val) =>
            val.title.toLowerCase().includes(input?.toLowerCase())
        );
    }, [input, products]);

    return (
        <>
            <Navigation cartCount={quantity} />
            <Main>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="relative w-64 mb-4">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg
                                        aria-hidden="true"
                                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>

                                <input
                                    className="block w-full p-3 pl-10 pr-10 border border-gray-300 rounded-lg bg-white focus-within:outline-none focus-within:ring-offset-2 focus-within:ring-1"
                                    contentEditable
                                    value={input}
                                    onChange={(e) => {
                                        setInput(e.target.value);
                                    }}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                >
                                    {input && (
                                        <button
                                            className="hover:bg-gray-100 hover:text-gray-900 p-1 rounded-full"
                                            onClick={() => setInput("")}
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-4 h-4 text-gray-500"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </button>
                                    )}
                                </button>
                            </div>
                            <Table>
                                {filterProducts.length && (
                                    <>
                                        <Table.Head>
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
                                                    Category
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
                                        </Table.Head>

                                        <Table.Body>
                                            {filterProducts.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                                                        <Highlighted
                                                            match={input}
                                                        >
                                                            {product.title}
                                                        </Highlighted>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {product.category}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {product.price}€
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <Button
                                                            skin="success"
                                                            onClick={() =>
                                                                addProductToCart(
                                                                    product
                                                                )
                                                            }
                                                        >
                                                            Add
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </Table.Body>
                                    </>
                                )}
                            </Table>
                        </div>
                    </div>
                </div>
            </Main>
        </>
    );
};

export default ProductsPage;
