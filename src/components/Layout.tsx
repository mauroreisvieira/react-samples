import * as React from 'react';
import classNames from 'classnames';

interface LayoutProps {
    className?: string;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => (
    <main className={classNames("max-w-7xl mx-auto px-2 sm:px-6 lg:px-8", className)}>
        { children }
    </main>
);

export default Layout;
