// import React, { Suspense } from 'react';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import favicon from '../shared/assets/favicon.png';
import Routes from './routes';

const App: React.FC<any> = () => {
    return (
        // <Suspense fallback={<div>Loading</div>}>
        <div>
            <Helmet
                defaultTitle="React SSR Starter – TypeScript Edition"
                titleTemplate="%s – React SSR Starter – TypeScript Edition"
                link={[{ rel: 'icon', type: 'image/png', href: favicon }]}
            />
            <Routes />
        </div>
        // </Suspense>
    );
};

export default App;
