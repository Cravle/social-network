import React from 'react';
import s from './Message.module.css'


const Message = (props) => {
    return (
        <div className={s.messageWrapper}>

            <img className={s.ava} src={props.avaUrl} alt="$"/>
            <div>
                <div className={s.name}>Name</div>
                
                <div className={s.message}>{props.message}</div>
            </div>
        </div>

    )
}

export default Message;