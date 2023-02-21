import React, { useRef, useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { Navigation } from "../layouts/navigation";
import { Main } from "../layouts/main";
import { Typography } from "../components/Typography";

const About = (): React.ReactElement => {
    const ref = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        console.log("href:", ref.current?.href);
    }, []);

    return (
        <>
            <Navigation />
            <Main>
                <div className="flex justify-between items-center">
                    <Typography size="h1">
                        <FormattedMessage id="about.title" />
                    </Typography>
                </div>
                <Typography
                    ref={ref}
                    as="a"
                    href="https://github.com/mauroreisvieira/hello-week"
                >
                    GitHub Profile
                </Typography>
                <Typography>
                    <FormattedMessage id="about.text" />
                </Typography>
            </Main>
        </>
    );
};

export default About;
