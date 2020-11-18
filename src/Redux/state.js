let rerenderEntireTree = () => {
    console.log("State changed");
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 44},
            {id: 3, message: 'It\'s my first post', likesCount: 55},
        ],
        newPostText: "Type your thoughts..."
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
        newMessage: "Write a message"

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
}
window.state = state;


export const addPost = () => {

    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';

    rerenderEntireTree(state);
}

export const updateNewPostText = (postMessage) => {
    state.profilePage.newPostText = postMessage;
    rerenderEntireTree(state);
}

export const addMessage = () => {
    let newMessage = {
        id: 5,
        message: state.dialogsPage.newMessage,
        avaUrl: 'https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg',
    }

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (messageText) => {

    state.dialogsPage.newMessage = messageText;
    rerenderEntireTree(state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer; // observer pattern
}

export default state;