import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_OWNER = 'SET-OWNER',
    SET_STATUS = 'SET-STATUS',
    DELETE_POST = 'DELETE-POST',
    TOGGLE_LIKE = 'TOGGLE-LIKE',
    SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';

type postType = {
    id: number,
    message: string
    likesCount: number
    liked: boolean
}

type initialStateType = {
    posts: Array<postType>
    profile: object | null,
    owner: object | null,
    status: string
}

let initialState: initialStateType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11, liked: false},
        {id: 2, message: 'It\'s my first post', likesCount: 44, liked: false},
        {id: 3, message: 'It\'s my first post', likesCount: 55, liked: false},
    ],

    profile: null,
    owner: null,
    status: "",
};


const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postType = {
                id: state.posts[state.posts.length - 1].id + 1,
                message: action.newPostText,
                likesCount: 0,
                liked: false
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
        case SET_OWNER: {
            return {
                ...state,
                owner: action.profile
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
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

type addPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}
//AC
export const addPost = (newPostText: string): addPostActionType => ({
    type: ADD_POST,
    newPostText
})

type setUsetProfileType = {
    type: typeof SET_USER_PROFILE
    profile: any
}

export const setUserProfile = (profile: any): setUsetProfileType => ({
    type: SET_USER_PROFILE,
    profile
})

export const setIsOwner = (profile: any) => ({
    type: SET_OWNER,
    profile
})

export const setStatus = (status: string) => ({
    type: SET_STATUS,
    status
})

export const deletePost = (id: number) => ({
    type: DELETE_POST,
    id
})

export const savePhotoSuccess = (photos: any) => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})


export const toggleLike = (id, likeOrUnlike) => ({
    type: TOGGLE_LIKE,
    id,
    likeOrUnlike
})

//THC
export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
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

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile, id) => async (dispatch) => {
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {

        dispatch(getUserProfile(id))
    }
}


export default profileReducer;