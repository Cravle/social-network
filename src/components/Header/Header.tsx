import React, {useState} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import userPhoto from "../../assets/img/user.jpg";
import {ProfileType} from "../../types/types";
import {deleteAuthLogin} from "../../Redux/auth-reducer";

//
// deleteAuthLogin: ƒ ()
// isAuth: true
// login: "Cravle"
// owner: null
// profile: null


type PropsType = {
    deleteAuthLogin: () => void
    isAuth: boolean
    login: string | null
    owner: ProfileType
    profile: ProfileType

}

//TODO Капча с докум
const Header = (props: PropsType) => {
    let [menu, setMenu] = useState(false);


    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.imgWrapper}>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/vk-18-898139.png" alt=""/>
                </div>
                <></>
                <div>{
                    props.isAuth ?
                        <div className={s.loginWrapper}>
                            <div className={s.me}>
                                <div onClick={() => menu ? setMenu(false) : setMenu(true)}
                                     className={s.login}>
                                    <div/>
                                    <img className={s.userPhoto}
                                         src={props.owner && props.owner.photos.small ? props.owner.photos.small : userPhoto}
                                         alt=""/>
                                    <span className={s.name}> {props.login}</span>
                                </div>
                            </div>
                            {menu &&
                            <div className={s.menu}
                                 onClick={(e: any) => e.target.tagName !== 'BUTTON' && setMenu(false)}>
                                <div className={s.menuWrapper}>
                                    <button className={s.logout}
                                            onClick={props.deleteAuthLogin}>Log out
                                    </button>
                                </div>
                            </div>}
                        </div> :
                        <div className={s.me}>

                            <div/>
                            <NavLink to={'/login'} className={s.login}>
                                <div/>
                                <div/>
                                <span className={s.name}>login</span>
                            </NavLink>
                        </div>
                }
                </div>
            </div>
        </header>
    )
}

export default Header;