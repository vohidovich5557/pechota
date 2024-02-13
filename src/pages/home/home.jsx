import React from "react";
import { MainLayout } from "../../layout/main-layout";
import { bannerData } from "../../data/home";
import { MainBanner } from "../../components/banner/main-banner";
import { Cards } from "../../components/cards/card";
import { Shops } from "../../components/shop";



export const Home = () => {


    return (
        <>
        <div className="container">
        <MainLayout>
            {bannerData.map((item) => (
                <MainBanner 
                img={item.img}
                title={item.title}
                text={item.text}
                />
            ))}
            <Cards />
            <Shops />
        </MainLayout>
        </div>
        </>
    )
}