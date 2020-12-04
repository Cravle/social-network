const SEND_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.newMessage,
                avaUrl: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg',
            }

            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.messageText;
            return state;
        default:
            return state;
    }


}
export const addMessageCreator = () => ({
    type: SEND_MESSAGE,
})

export const updateNewMessageTextCreator = (messageText) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    messageText: messageText,
})
export default dialogsReducer;

