const SEND_MESSAGE = 'ADD-MESSAGE',
    UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogs:
        [
            {
                id: 1,
                name: 'Vitalya',
                avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
            },
            {
                id: 2,
                name: 'Vitya',
                avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
            },
            {
                id: 3,
                name: 'Artem',
                avaUrl: 'https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg',
            },
            {
                id: 4,
                name: 'Den',
                avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
            },
        ],
    messages: [
        {
            id: 1,
            message: 'Hi',

            avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
        },
        {
            id: 2,
            message: 'How is your web-site?',
            avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
        },
        {
            id: 3,
            message: 'Yo',
            avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
        },
        {
            id: 4,
            message: 'Yo',
            avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
        },
    ],
    newMessage: ""

};

const dialogsReducer = (state = initialState, action) => {

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

