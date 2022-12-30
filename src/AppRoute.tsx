import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import CartPage from './pages/Cart';
import ProductsPage from './pages/Products';
import NoMatch from './pages/NoMatch';
import About from './pages/About';
import Lifecycle from './pages/Lifecycle';

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
            path: '/about',
            element: <About />,
        },
        {
            path: '/lifecycle',
            element: <Lifecycle />,
        },
        { path: '*', element: <NoMatch /> },
    ]);

    return <div>{routes}</div>;
};

export default AppRoute;
