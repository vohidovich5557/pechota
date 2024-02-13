import React from "react";
import card from './card.module.scss'
import { cardData } from "../../data/home";


export const Cards = ({ title, text, img, full }) => {


    return (

        <div className={card.container}>
            {cardData.map((item) => (
                <div className={card.cards_box}>
                    <img src={item.img} alt="img1" className={card.img} />
                    <div className={card.card_info}>
                        <h2 className={card.title}>{item.title}</h2>
                        <p className={card.text}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}