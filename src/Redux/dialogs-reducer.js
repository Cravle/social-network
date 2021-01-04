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
                avaUrl: 'https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1',
            },
            {
                id: 3,
                name: 'Artem',
                avaUrl: 'https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1',
            },
            {
                id: 4,
                name: 'Den',
                avaUrl: 'https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/',
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
    let stateCopy = {...state};

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: state.newMessage,
                avaUrl: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg',
            }

            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessage = '';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {

            stateCopy.newMessage = action.messageText;
            return stateCopy;
        }
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

