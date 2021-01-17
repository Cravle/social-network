import React from 'react';
import s from './Dialogs.module.css'
import {Redirect} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reset, reduxForm} from "redux-form";
import {MessageTextArea} from "../comoon/FormsCntrols/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit} className={s.areaWrapper}>
            <Field
                component={MessageTextArea}
                errorClass={s.errorMsgAbs}
                type={"text"}
                validate={[required, maxLength100]}
                name="message"
                id="message"
                cols="10"
                rows="50"
                placeholder={"write a message"}
            />
            <button className={s.button}>
                <img
                    className={s.sendImg}
                    src="/send.svg"
                    alt="send"/>
            </button>
        </form>
    )
}
const afterSubmit = (result, dispatch) =>
    dispatch(reset('message'));

const MessageReduxForm = reduxForm({
    form: 'message',
    onSubmitSuccess: afterSubmit,
})(MessageForm)

//TODO Сообщение от меня в одном углу, от собеседника - в другом
const Dialogs = (props) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id}
                                                             key={d.id}
                                                             name={d.name}
                                                             avaUrl={d.avaUrl}/>,);
    let messagesElements = props.messages.map(m => <Message message={m.message}
                                                            key={m.id}
                                                            avaUrl={m.avaUrl}/>);


    let onSendMessageClick = (formData) => {
        props.sendMessage(formData.message);

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
                <MessageReduxForm onSubmit={onSendMessageClick}/>
            </div>

        </div>
    )
}

export default Dialogs;