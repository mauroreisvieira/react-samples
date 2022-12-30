import * as React from "react";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

const About = () => {
    React.useMemo(() => {
        console.log(1);
    }, []);

    console.log(2);

    React.useLayoutEffect(() => {
        console.log(3);

        return () => console.log(5);
    }, []);

    React.useEffect(() => {
        console.log(4);

        return () => console.log(6);
    }, []);

    React.useCallback(() => {
        console.log(7);
    }, []);

    return (
        <>
            <Navigation />
            <Layout>
                <div className="min-h-screen">
                    <div className="p-8">
                        <Typography as="h1" className="text-2xl">About</Typography>
                        <Button as="a" href="/">Link</Button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;