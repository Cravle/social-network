import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_STATUS = 'SET-STATUS',
    DELETE_POST = 'DELETE-POST',
    TOGGLE_LIKE = 'TOGGLE-LIKE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11, liked: false},
        {id: 2, message: 'It\'s my first post', likesCount: 44, liked: false},
        {id: 3, message: 'It\'s my first post', likesCount: 55, liked: false},
    ],

    profile: null,
    status: "",
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.newPostText,
                likesCount: 0,
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: [...state.posts.filter(p => p.id !== action.id)]
            };
        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };

        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status,
            };

        }

        case TOGGLE_LIKE: {
            return {
                ...state,
                posts: [...state.posts.map(p => {
                    if (p.id === action.id) {
                        p.liked ? p.likesCount-- : p.likesCount++;
                        p.liked = !p.liked;

                    }
                    return p;
                })]
            }
        }
        default:
            return state;

    }


}
//AC
export const addPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
})


export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})

export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})

export const deletePost = (id) => ({
    type: DELETE_POST,
    id
})

export const toggleLike = (id, likeOrUnlike) => ({
    type: TOGGLE_LIKE,
    id,
    likeOrUnlike
})

//THC
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));


}
export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}


export default profileReducer;