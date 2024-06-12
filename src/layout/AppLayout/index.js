import React from 'react';
import { Analytics } from "@vercel/analytics/react"
import {Helmet} from "react-helmet";

import Header from "../Header";
import Footer from "../Footer";

const AppLayout = ({children}) => {
    return (
        <>
            <Helmet>
                <title>Кафедра ІТВС</title>
            </Helmet>
            <Analytics/>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default AppLayout;
