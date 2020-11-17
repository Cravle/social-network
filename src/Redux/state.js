let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 11},
            {id: 2, message: 'It\'s my first post', likesCount: 44},
            {id: 3, message: 'It\'s my first post', likesCount: 55},
        ],

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

export let addPost = (postMessage) => {
    
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
}

export default state;