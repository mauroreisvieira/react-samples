import React from "react";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";

const Lifecycle = () => {
    React.useMemo(() => {
        // 1º useMemo: lets you cache the result of a calculation between re-renders.
        console.log("%cuseMemo", "color: blue");
    }, []);

    // 2º Render phase: called all times component mounting/update
    console.log("%cmounting/update", "color: orange");

    // 3º useInsertionEffect: fires before any DOM mutations.
    React.useInsertionEffect(() => {
        console.log("%cuseInsertionEffect", "color: green");
    }, []);

    // 4º useLayoutEffect: fires before the browser repaints the screen.
    React.useLayoutEffect(() => {
        console.log("%cuseLayoutEffect", "color: green");

        return () =>
            // 6º
            console.log("%cunmount useLayoutEffect", "color: red");
    }, []);

    // 5º useEffect: lets you synchronize a component with an external system.
    React.useEffect(() => {
        console.log("%cuseEffect", "color: green");

        return () =>
            // 7º
            console.log("%cunmount useEffect", "color: red");
    }, []);

    // useState
    // useReducer
    // useContext
    // useCallback

    return (
        <>
            <Navigation />
            <Main>
                <Typography size="h1">Lifecycle</Typography>
            </Main>
        </>
    );
};

export default Lifecycle;
