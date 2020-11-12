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

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: 'Vitalya'},
        {id: 2, name: 'Vitya'},
        {id: 3, name: 'Artem'},
        {id: 4, name: 'Den'},
    ];

    let messages = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your web-site?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},

    ];

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id}
                                                       name={d.name}/>,);


    let messagesElements = messages.map(m => <Message message={m.message}/>);


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;