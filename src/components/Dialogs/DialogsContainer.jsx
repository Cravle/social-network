import React from 'react';
import {addMessageCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


//TODO Сообщение от меня в одном углу, от собеседника - в другом
//TODO рефактор текст area : убрать реф, сделать через e.target


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
//20 29
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: () => {
            dispatch(addMessageCreator());
        },
        sendMessage: (body) => {
            dispatch(updateNewMessageTextCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;