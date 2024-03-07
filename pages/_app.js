import React from 'react';
import {Provider} from "react-redux";

import AppLayout from "../src/layout/AppLayout";
import {store} from "../src/store/store.config";

import "../src/styles/global.scss";

const MyApp = ({Component, pageProps}) => {
    return (
        <Provider store={store}>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </Provider>
    );
};

export default MyApp;
