const ADD_POST = 'ADD-POST',
    UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
    SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11},
        {id: 2, message: 'It\'s my first post', likesCount: 44},
        {id: 3, message: 'It\'s my first post', likesCount: 55},
    ],
    newPostText: "",
    profile: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: state.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.postMessage
            };

        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };

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
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})


export default profileReducer;