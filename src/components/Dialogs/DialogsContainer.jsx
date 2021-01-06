import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


//TODO Сообщение от меня в одном углу, от собеседника - в другом
//TODO рефактор текст area : убрать реф, сделать через e.target


let mapStateToProps = (state) => {
    return {

        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(addMessageCreator());
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;