const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
        {id: 3, message: 'It\'s my first post', likesCount: 55},
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);

            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};

            stateCopy.newPostText = action.postMessage;
            return stateCopy;
        }
        default:
            return state;

    }


}

export const addPostCreator = () => ({
    type: ADD_POST,
})

export const updateNewPostTextCreator = (postMessage) => ({
    type: UPDATE_NEW_POST_TEXT,
    postMessage: postMessage,
})


export default profileReducer;