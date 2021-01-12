import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

//TODO показать автарку сверху
//TOOD сделать подписку на пользователя через сервак

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.imgWrapper}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png" alt=""/>
                </div>
                <></>

                <NavLink to={'/login'} className={s.login}>{

                    props.isAuth ?
                        `${props.login}` :
                        "login"
                }</NavLink>
            </div>
        </header>
    )
}

export default Header;