import React from 'react';
import s from './Message.module.css'

//TODO исправить баг с сообщениями

const Message = (props) => {
    if (props.fromOwner)
        return (
            <div className={s.messageFromOwner}>

                <div className={s.messageInner}>
                    <div className={s.name}>{props.fromOwner ? props.ownerName : props.name}</div>

                    <div className={s.message}>{props.message}</div>
                </div>
                <img className={s.ava} src={props.fromOwner ? props.ownerAva : props.avaUrl}
                     alt="$"/>

            </div>
        )
    return (
        <div className={s.messageWrapper}>

            <img className={s.ava} src={props.fromOwner ? props.ownerAva : props.avaUrl} alt="$"/>
            <div>
                <div className={s.name}>{props.fromOwner ? props.ownerName : props.name}</div>

                <div className={s.message}>{props.message}</div>
            </div>
        </div>

    )
}

export default Message;