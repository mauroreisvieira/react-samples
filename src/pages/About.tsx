import * as React from "react";
import Navigation from "../Layout/Navigation";
import Main from "../Layout/Main";
import { Button } from "../components/Button";
import { Typography } from "../components/Typography";

const About = () => {
    const ref = React.useRef<HTMLAnchorElement>(null);

    React.useEffect(() => {
        console.log("Ref", ref.current);
    }, []);

    return (
        <>
            <Navigation />
            <Main>
                <div className="min-h-screen">
                    <div className="p-8 flex justify-between items-center">
                        <Typography size="h2">About</Typography>
                        <Button
                            ref={ref}
                            as="a"
                            href="https://github.com/mauroreisvieira/hello-week"
                            size="sm"
                            skin="ghost"
                        >
                            GitHub Profile
                        </Button>
                    </div>
                </div>
            </Main>
        </>
    );
};

export default About;
