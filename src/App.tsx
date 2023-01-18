import React from "react";

import ShopProvider from "./shop";
import AppRoute from "./AppRoute";

const App = (): React.ReactElement => {
    return (
        <ShopProvider>
            <AppRoute />
        </ShopProvider>
    );
};
export default App;
