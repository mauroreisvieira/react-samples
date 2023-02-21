import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import ShopProvider from "./components/shop";
import Router from "./routes/Router";

import "./assets/styles/tailwind.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ShopProvider>
                <Router />
            </ShopProvider>
        </BrowserRouter>
    </React.StrictMode>
);
