import React from 'react';
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


//TODO Сообщение от меня в одном углу, от собеседника - в другом
const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id}
                                                             key={d.id}
                                                             name={d.name}
                                                             avaUrl={d.avaUrl}/>,);
    let messagesElements = props.messages.map(m => <Message message={m.message}
                                                            key={m.id}
                                                            avaUrl={m.avaUrl}/>);

    let newMessage = React.createRef();
    let onSendMessageClick = () => {
        props.sendMessage();
        //props.dispatch(addMessageCreator());
    }

    let onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessage(body);
        //props.dispatch(updateNewMessageTextCreator(messageText));
    }
    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messagesWrapper}>
                {messagesElements}
                <div className={s.areaWrapper}>
                    <textarea className={s.textarea}
                              name="post"
                              value={props.newMessage}
                              onChange={onMessageChange}
                              id="post"
                              cols="10"
                              rows="50"
                              placeholder={"write a message"}
                              ref={newMessage}
                    />
                    <button className={s.button} onClick={onSendMessageClick}>
                        <img
                            className={s.sendImg}
                            src="/send.svg"
                            alt="send"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;