import React from 'react';
import s from '../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`,
        name = props.name;
    return (
        <div>
            <NavLink className={s.dialog} activeClassName={s.active}
                     to={path}>{name}</NavLink>
        </div>
    )
}


export default DialogItem;