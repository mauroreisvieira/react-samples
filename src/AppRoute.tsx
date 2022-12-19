import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import CartPage from './pages/Cart';
import ProductsPage from './pages/Products';
import NoMatch from './pages/NoMatch';
import TestPage from './pages/TestPage';

const AppRoute = (): React.ReactElement => {
    const routes = useRoutes([
        {
            path: '/',
            element: <ProductsPage />,
        },
        {
            path: '/cart',
            element: <CartPage />,
        },
        {
            path: '/test',
            element: <TestPage />,
        },
        { path: '*', element: <NoMatch /> },
    ]);

    return <div>{routes}</div>;
};

export default AppRoute;
