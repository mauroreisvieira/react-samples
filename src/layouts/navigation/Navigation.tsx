import React from "react";
import { NavLink } from "react-router-dom";
import { classNames } from "../../utils/functions";

import { Button } from "../../components/Button";
import { useTheme } from "../../components/theme";

interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
    cartCount?: number;
}

export const Navigation = ({
    cartCount,
    className,
    ...restProps
}: NavigationProps) => {
    const computedClasses = classNames("bg-gray-800 mb-12", className);

    const { setLanguage, language } = useTheme();

    return (
        <nav className={computedClasses} {...restProps}>
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex justify-between h-16">
                    <div className="flex-1 flex items-center">
                        <div className="flex-1">
                            <div className="flex space-x-4">
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/"
                                >
                                    Products
                                </NavLink>
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/cart"
                                >
                                    Cart {cartCount ? `(${cartCount})` : ""}
                                </NavLink>
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/about"
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    to="/lifecycle"
                                >
                                    React Lifecycle
                                </NavLink>
                            </div>
                        </div>
                        <div>
                            <Button
                                skin="secondary"
                                size="xs"
                                onClick={() => {
                                    setLanguage(
                                        language === "en" ? "pt" : "en"
                                    );
                                }}
                            >
                                {language === "en" ? "🇵🇹" : "🇺🇸"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
