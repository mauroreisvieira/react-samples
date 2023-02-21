import React, { useEffect } from "react";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";

const About = () => {
    const ref = React.useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        console.log("href:", ref.current?.href);
    }, []);

    return (
        <>
            <Navigation />
            <Main>
                <div className="flex justify-between items-center">
                    <Typography size="h1">About</Typography>
                </div>
                <Typography
                    ref={ref}
                    as="a"
                    href="https://github.com/mauroreisvieira/hello-week"
                >
                    GitHub Profile
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit, illum?
                </Typography>
            </Main>
        </>
    );
};

export default About;
