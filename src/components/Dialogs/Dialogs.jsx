import React from 'react';
import s from './Dialogs.module.css'
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

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem id="1" name="Vitalya"/>

                <DialogItem id="2" name="Vitya"/>

                <DialogItem id="3" name="Artem"/>

                <DialogItem id="4" name="Den"/>

            </div>

            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How is your web-site?'}/>
                <Message message={'Yo'}/>

            </div>
        </div>
    )
}

export default Dialogs;