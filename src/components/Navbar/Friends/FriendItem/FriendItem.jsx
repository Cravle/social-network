import React from 'react';
import {NavLink} from "react-router-dom";
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <>
            <NavLink className={s.wrapper} to={props.id}>
                <img className={s.img} src={props.avaUrl} alt="$"/>
                <div className={s.name}>{props.name}</div>
            </NavLink>
        </>
    )
}

export default FriendItem;