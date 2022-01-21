import * as React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NoMatch: React.FC = () => (
    <Layout>
        <h2>It looks like you re lost...</h2>
        <p>
            <Link to="/">Go to the home page</Link>
        </p>
    </Layout>
);

export default NoMatch;
