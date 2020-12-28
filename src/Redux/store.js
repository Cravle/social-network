import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 11},
                {id: 2, message: 'It\'s my first post', likesCount: 44},
                {id: 3, message: 'It\'s my first post', likesCount: 55},
            ],
            newPostText: ""
        },
        dialogsPage: {
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

        },

        sidebar: {
            friends: [
                {
                    avaUrl: 'https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg',
                    name: "Temi",
                    id: 1,
                },
                {
                    avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
                    name: "Vitalya",
                    id: 2,
                }
            ]
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer pattern
    },

    _addPost() {

        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state);
    },

    _updateNewPostText(postMessage) {
        this._state.profilePage.newPostText = postMessage;
        this._callSubscriber(this._state);
    },

    _addMessage() {
        let newMessage = {
            id: 5,
            message: this._state.dialogsPage.newMessage,
            avaUrl: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg',
        }

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = '';
        this._callSubscriber(this._state);
    },

    _updateNewMessageText(messageText) {


    },

    dispatch(action) { // {type: 'ADD-POST'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },

}


export default store;
window.store = store;