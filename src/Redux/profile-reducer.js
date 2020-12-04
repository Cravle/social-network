const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postMessage;
            return state;
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