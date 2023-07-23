import React from 'react';


import AppLayout from "../src/layout/AppLayout";
import "../src/styles/global.scss";

const MyApp = ({Component, pageProps}) => {
    return (
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
    );
};

export default MyApp;
