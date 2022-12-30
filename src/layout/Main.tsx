import * as React from 'react';
import classNames from 'classnames';

interface MainProps {
    className?: string;
    children?: React.ReactNode;
}

const Main = ({ className, children }: MainProps) => (
    <main className={classNames("max-w-7xl mx-auto px-2 sm:px-6 lg:px-8", className)}>
        { children }
    </main>
);

export default Main;
