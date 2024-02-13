import React from "react";
import shop from './shop.module.scss'
import { shopTab } from "../../data/home";
import { shopCard } from "../../data/home";

export const Shops = () => {



    return (
        <>
         <div className={shop.container}>
            <div className={shop.tabs}>
                {shopTab.map((item) => (
                    <button className={shop.btn}>{item.name}</button>
                ))}
            </div>
            <div className={shop.cards}>
            {shopCard.map((item) => (
                    <div className={shop.card__box}>
                        <img src={item.img} alt="img" className="cardImg" />
                        <h2 className={shop.title}>{item.title}</h2>
                        <p className={shop.text}>{item.text}</p>
                        <p className={shop.price}>{item.price}</p>
                        <div className={shop.discount__box}>
                            <p className={shop.discount}>{item.discount}</p>
                            <div className={shop.discount__box2}>
                                <p className={shop.precentage}>{item.discountPercentage}</p>
                                <p className={shop.eco}>{item.discountEco}</p>
                            </div>
                        </div>
                        <div className={shop.buttons}>
                            <button className={shop.btn1}>Купить</button>
                            <button className={shop.btn2}>В 1 клик</button>
                        </div>
                    </div>
                ))}
            </div>
         </div>
        </>
    )
}