import React from 'react';
import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`,
        name = props.name;
    return (
        <div>
            <NavLink className={s.dialog} activeClassName={s.active} to={path}>
                <div className={s.wrapper} onClick={props.afterSelectedChat}>
                    <img src={props.avaUrl} alt="" className={s.ava}/>
                    <div>
                        <div className={s.dialogName}>
                            {name}
                        </div>
                        <div className={s.dialogMessage}>message</div>
                    </div>

                </div>

            </NavLink>
        </div>
    )
}


export default DialogItem;