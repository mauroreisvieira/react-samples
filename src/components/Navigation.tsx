import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface NavigationProps {
    cartCount?: number;
}

const Navigation = ({ cartCount }: NavigationProps) => (
    <nav className="bg-gray-800 mb-12">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div>
                        <div className="flex space-x-4">
                            <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/">Products</NavLink>
                            <NavLink
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                to="/cart"
                            >
                                Cart {cartCount ? `(${cartCount})` : ""}
                            </NavLink>
                            <NavLink className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" to="/about">About</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);

export default Navigation;
