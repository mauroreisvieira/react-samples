import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import GlobalState from './context/GlobalState';

import CartPage from './pages/Cart';
import ProductsPage from './pages/Products';
import NoMatch from './pages/NoMatch';

const App = () => {
    const routes = useRoutes([
        {
            path: '/',
            element: <ProductsPage />,
        },
        {
            path: '/cart',
            element: <CartPage />,
        },
        { path: '*', element: <NoMatch /> },
    ]);
    return <GlobalState>{routes}</GlobalState>;
}

export default App;
