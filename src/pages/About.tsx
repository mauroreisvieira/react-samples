import * as React from "react";
import Navigation from "../components/Navigation";
import Layout from "../components/Layout";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

const About = () => {
    const ref = React.useRef<HTMLAnchorElement>(null);

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
                    <div className="p-8 flex justify-between items-center">
                        <Typography size="h2">About</Typography>
                        <Button
                            as="a"
                            href="https://github.com/mauroreisvieira/hello-week"
                            size="sm"
                            skin="ghost"
                        >
                            GitHub Profile
                        </Button>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default About;
