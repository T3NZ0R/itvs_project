import React from 'react';
import {Provider} from "react-redux";

import AppLayout from "@/layout/AppLayout";
import {store} from "@/store/store.config";

import "@/styles/global.scss";

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
