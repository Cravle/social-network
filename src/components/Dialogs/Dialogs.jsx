import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/state";


//TODO Сообщение от меня в одном углу, от собеседника - в другом

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id}
                                                                   name={d.name}
                                                                   avaUrl={d.avaUrl}/>,);

    let messagesElements = props.state.messages.map(m => <Message message={m.message}
                                                                  avaUrl={m.avaUrl}/>);

    let newMessage = React.createRef();
    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = () => {
        let messageText = newMessage.current.value;
        props.dispatch(updateNewMessageTextActionCreator(messageText));


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
                              value={props.state.newMessage}
                              onChange={onMessageChange}
                              id="post"
                              cols="10"
                              rows="50"
                              placeholder={"write a message"}
                              ref={newMessage}
                    />
                    <button className={s.button} onClick={addMessage}>
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