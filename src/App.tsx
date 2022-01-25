import * as React from 'react';
import { useRoutes } from 'react-router-dom';

import ShopProvider from './context/ShopProvider';

import CartPage from './pages/Cart';
import ProductsPage from './pages/Products';
import NoMatch from './pages/NoMatch';

const App = (): React.ReactElement => {
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
    return <ShopProvider>{routes}</ShopProvider>;
}

export default App;
