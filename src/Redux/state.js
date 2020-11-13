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
                {id: 1, name: 'Vitalya'},
                {id: 2, name: 'Vitya'},
                {id: 3, name: 'Artem'},
                {id: 4, name: 'Den'},
            ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your web-site?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
        ],

    },
    sidebar: {
        id: 1,
    }
}

export default state;