import {addMessageCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthReditect";
import {compose} from "redux";
import {withRouter} from "react-router-dom";


//TODO Сообщение от меня в одном углу, от собеседника - в другом


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessage: state.dialogsPage.newMessage,
        owner: state.profilePage.owner
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessage, name, avaUrl) => {
            dispatch(addMessageCreator(newMessage, name, avaUrl));
        },
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)
(Dialogs);