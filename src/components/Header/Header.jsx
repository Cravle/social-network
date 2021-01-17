import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

//TODO показать автарку сверху
//TODO Капча с докум
const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.imgWrapper}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png" alt=""/>
                </div>
                <></>
                <div className={s.login}>{
                    props.isAuth ? <>
                            <NavLink to={'/profile'} className={s.login}>
                                {props.login}
                            </NavLink>
                            <button onClick={props.deleteAuthLogin}>Log out</button>
                        </> :
                        <NavLink to={'/login'} className={s.login}>
                            login
                        </NavLink>
                }
                </div>
            </div>
        </header>
    )
}

export default Header;