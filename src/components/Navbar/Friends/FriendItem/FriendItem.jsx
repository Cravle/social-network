import React from 'react';
import {NavLink} from "react-router-dom";
import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <>
            <NavLink to={`/profile/${props.id}`} className={s.wrapper}>
                <img className={s.img} src={props.avaUrl} alt="$"/>
                <div className={s.name}>{props.name}</div>
            </NavLink>
        </>
    )
}

export default FriendItem;