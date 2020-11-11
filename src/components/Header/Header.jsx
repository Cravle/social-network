import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.imgWrapper}>
                <img src="https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png" alt=""/>
            </div>
        </header>
    )
}

export default Header;