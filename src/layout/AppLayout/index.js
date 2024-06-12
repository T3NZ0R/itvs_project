import React from 'react';
import { Analytics } from "@vercel/analytics/react"

import Header from "../Header";
import Footer from "../Footer";

const AppLayout = ({children}) => {
    return (
        <>
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
