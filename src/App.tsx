import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";

import ThemeProvider, { useTheme, Language } from "./components/theme";
import ShopProvider from "./components/shop";
import Router from "./routes/Router";

import { useLocalStorage } from "./utils/hooks/useLocalStorage";

import { messages } from "./locales";

import "./assets/styles/tailwind.css";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

const Intl = (): React.ReactElement => {
    const { language } = useTheme();
    const [, setStorageLanguage] = useLocalStorage<Language>(
        "language",
        language
    );

    useEffect(() => {
        setStorageLanguage(language);
    }, [setStorageLanguage, language]);

    return (
        <IntlProvider locale={navigator.language} messages={messages[language]}>
            <BrowserRouter>
                <ShopProvider>
                    <Router />
                </ShopProvider>
            </BrowserRouter>
        </IntlProvider>
    );
};

const App = (): React.ReactElement => {
    const [storageLanguage] = useLocalStorage<Language>("language", "pt");

    return (
        <React.StrictMode>
            <ThemeProvider defaultLanguage={storageLanguage}>
                <Intl />
            </ThemeProvider>
        </React.StrictMode>
    );
};

root.render(<App />);
