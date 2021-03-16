import {Message} from "react-hook-form";

const SEND_MESSAGE = 'ADD-MESSAGE';

type MessageType = {
    id: number
    message: string
    avaUrl: string
}

type DialogsType = {
    id: number
    name: string
    avaUrl: string
}
//
// type initialStateType = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessageType>
// }


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
        ] as Array<DialogsType>,
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
    ] as Array<MessageType>,

};

export type initialStateType = typeof initialState


const dialogsReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageObj = {
                id: state.messages[state.messages.length - 1].id + 1,
                message: action.newMessage,
                avaUrl: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg',
            }
            return {
                ...state,
                messages: [...state.messages, newMessageObj],
            }


        }

        default:
            return state;
    }


}

type addMessageCreatorActionType = {
    type: typeof SEND_MESSAGE,
    newMessage: string
}

export const addMessageCreator = (newMessage: string): addMessageCreatorActionType => ({
    type: SEND_MESSAGE,
    newMessage
})


export default dialogsReducer;

