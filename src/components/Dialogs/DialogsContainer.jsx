import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";


//TODO Сообщение от меня в одном углу, от собеседника - в другом
//TODO рефактор текст area : убрать реф, сделать через e.target
const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;
    let sendMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageTextCreator(body));
    }

    return <Dialogs
        sendMessage={sendMessage}
        updateNewMessage={onMessageChange}
        dialogsPage={state}
    />

}

export default DialogsContainer;