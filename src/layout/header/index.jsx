import React from "react";
import { headerData } from "../../data/home";
import style from "./header.module.scss";
import { tabData } from "../../data/home";
import searchIcon from '../../../public/search_icon.svg'

export const Header = () => {


    return (
        <>
            <div className={style.container}>
                {headerData.map((item) => (
                    <>
                        <div className={style.part1}>
                            <img src={item.logo} alt="logo" className={style.logo}/>
                            <p className={style.title}>{item.title}</p>
                        </div>
                        <div className={style.part2}>
                            <img src={item.logoStar} alt="logo_star"  className={style.star}/>
                            <img src={item.logoCart} alt="logo_cart" className={style.cart}/>
                        </div>
                    </>
                ))}
            </div>
            <div className={style.container2}>
                <ul className={style.list}>
                    {tabData.map((item) => (
                        <li>
                            <a href={item.path} className={style.link}>{item.name}</a>
                        </li>
                    ))}
                </ul>
                <form className={style.form}>
                    <input type="search" placeholder="Поиск по сайту" className={style.search} />
                    <img src={searchIcon} alt="search_icon" className={style.icon} />
                </form>
            </div>
        </>
    )
};