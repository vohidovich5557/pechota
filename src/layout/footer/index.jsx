import React from "react";
import footer from './footer.module.scss'
import vector from '../../../public/vector.svg'
import facebook from '../../../public/facebook.svg'
import wk from '../../../public/wk.svg'
import insta from '../../../public/insta.svg'


export const Footer = () => {



    return (
        <>
            <div className={footer.container}>
                <div className={footer.ask}>
                    <h2 className={footer.title}>Есть вопросы?</h2>
                    <p className={footer.text}>Оставьте свои данные и наш менеджер свяжется с вами в ближайшее время.</p>
                </div>
                <div className={footer.logo}>
                    <img src={vector} alt="footer_logo" className={footer.logo_img} />
                </div>
                <form className={footer.form}>
                    <div className={footer.inputs}>
                        <div className={footer.part1}>
                            <input type="text" placeholder="Ваше имя" className={footer.input} />
                            <input type="text" placeholder="Телефон/E-mail" className={footer.input} />
                        </div>
                        <textarea placeholder="Комментарий" className={footer.comment} />
                    </div>
                    <div className={footer.checkbox}>
                        <input type="checkbox" name="Даю согласие на рассылку рекламных материалов, акций и скидок" id="check1" className={footer.checkitem} />
                        <p className={footer.checktext}>Даю согласие на рассылку рекламных материалов, акций и скидок</p>
                    </div>
                    <div className={footer.checkbox}>
                        <input type="checkbox" name="Даю согласие на обработку моих персональных данных" id="check1" className={footer.checkitem} />
                        <p className={footer.checktext}>Даю согласие на обработку моих персональных данных</p>
                    </div>
                </form>
            </div>
            <div className={footer.container2}>
                <div className={footer.service_box}>
                    <div className={footer.service}>
                        <h2 className={footer.title2}>Продукция</h2>
                        <p className={footer.text2}>Колбасные и мясные изделия</p>
                        <p className={footer.text2_2}>Молочные продукты</p>
                        <h2 className={footer.title2_2}>О компании</h2>
                    </div>
                    <div className={footer.service}>
                        <p className={footer.text2}>Морепродукты</p>
                        <p className={footer.text2_2}>Пиво</p>
                        <h2 className={footer.title2_2}>Наши магазины</h2>
                    </div>
                    <div className={footer.service}>
                        <p className={footer.text2}>Замороженные продукты</p>
                        <p className={footer.text2_2}>Мед</p>
                        <h2 className={footer.title2_2}>Контакты</h2>
                    </div>
                    <div className={footer.service}>
                        <p className={footer.text2}>Свежие овощи</p>
                        <p className={footer.text2_2}>Свежие фрукты</p>
                    </div>
                </div>
                <div className={footer.line}></div>
                <div className={footer.end}>
                    <p className={footer.end_title}>2016–2021 © ООО «ПД Реснота»
                    </p>
                    <div className={footer.icons}>
                        <img src={facebook} alt="facebook" className={footer.ico}/>
                        <img src={wk} alt="wk" className={footer.ico}/>
                        <img src={insta} alt="insta" className={footer.ico}/>
                    </div>
                    <p className={footer.end_text}>Разработка и продвижение сайта — SEOabsolut</p>
                </div>
            </div>
        </>
    )
};