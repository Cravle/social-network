import React from 'react';
import s from './Dialogs.module.css'
import {Redirect, Route} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reset, reduxForm} from "redux-form";
import {MessageTextArea} from "../comoon/FormsCntrols/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import send from "../../assets/img/send.svg";
import user from "../../assets/img/user.jpg"

const maxLength100 = maxLengthCreator(100);

const MessageForm = (props) => {
    return (

        <form onSubmit={props.handleSubmit} className={s.areaWrapper}>
            <Field
                component={MessageTextArea}
                errorclass={s.errorMsgAbs}
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
                    src={send}
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


const Dialogs = (props) => {
    const [isChatSelected, setIsChatSelected] = React.useState(!!props.match.params.chatId);
    const [selectedChat, setSelectedChat] = React.useState(props.match.params.chatId);
    const [isFromOwner, setIsFromOwner] = React.useState(false);

    const chatUser = props.dialogs[selectedChat - 1];

    const afterSelectedChat = () => {
        setIsChatSelected(true);
    }

    React.useEffect(() => {
        setIsChatSelected(!!props.match.params.chatId)
        setSelectedChat(props.match.params.chatId)
    }, [props.match.params.chatId])

    React.useEffect(() => {
        return () => {
            setIsFromOwner(false);
        }
    }, [])


    let dialogsElements = props.dialogs.map(d => <DialogItem id={d.id}
                                                             key={d.id}
                                                             name={d.name}
                                                             avaUrl={d.avaUrl}
                                                             afterSelectedChat={afterSelectedChat}
    />,);

    let messagesElements = props.messages.map(m => <Message message={m.message}
                                                            key={m.id}
                                                            chatId={selectedChat}
                                                            avaUrl={chatUser?.avaUrl}
                                                            ownerAva={m.avaUrl}
                                                            name={chatUser?.name}
                                                            fromOwner={m.fromOwner}
                                                            ownerName={m.name}
                                                            isFromOwner={isFromOwner}

    />);


    let onSendMessageClick = (formData) => {
        setIsFromOwner(true);
        props.sendMessage(formData.message, props.owner.fullName, props.owner.photos.small || user);
    }


    if (!props.isAuth) {
        return <Redirect to={"/login"}/>
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            {!isChatSelected && <div className={
                s.messagesWrapper}>
                <div className={s.selectUser}>
                    Select a chat to start messaging

                </div>
            </div>
            }
            <Route path="/dialogs/:chatId" render={() => <div className={s.messagesWrapper}>
                {messagesElements}
                <MessageReduxForm onSubmit={onSendMessageClick}/>
            </div>}/>


        </div>
    )
}

export default Dialogs;