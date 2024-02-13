import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";



export const MainLayout = ({ children }) => {


    return (
        <>
            <div className="wrapper">
                <Header />
                <main>{children}</main>
            </div>
            <footer>
                <Footer />
            </footer>

        </>
    )
};