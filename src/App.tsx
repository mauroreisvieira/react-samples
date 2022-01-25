import * as React from 'react';

import ShopProvider from './shop';
import AppRoute from './AppRoute';

const App = (): React.ReactElement => <ShopProvider><AppRoute /></ShopProvider>;

export default App;
