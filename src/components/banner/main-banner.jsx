import React from "react"
import banner from "./banner.module.scss";



export const MainBanner = ({ title, text, img }) => {

    return (
        <>
            <div className={banner.container}>
                <div className={banner.info}>
                    <img src={img} alt="bg_img" className={banner.bg_img} />
                    <h2 className={banner.title}>{title}</h2>
                    <p className={banner.text}>{text}</p>
                    <button className={banner.btn}>Купить</button>
                </div>
            </div>
        </>
    )

}