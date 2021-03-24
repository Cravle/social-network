import {profileAPI} from "../api/api";
import {PhotosType, postType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST',
    SET_USER_PROFILE = 'SET-USER-PROFILE',
    SET_OWNER = 'SET-OWNER',
    SET_STATUS = 'SET-STATUS',
    DELETE_POST = 'DELETE-POST',
    TOGGLE_LIKE = 'TOGGLE-LIKE',
    SET_ABOUT_ME_ERROR = 'SET-ABOUT-ME-ERROR',
    SAVE_PHOTO_SUCCESS = 'SAVE-PHOTO-SUCCESS';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 11, liked: false},
        {id: 2, message: 'It\'s my first post', likesCount: 44, liked: false},
        {id: 3, message: 'It\'s my first post', likesCount: 55, liked: false},
    ] as Array<postType>,

    profile: null as ProfileType | null,
    owner: null as any,
    status: "",
    aboutMeError: ""
};

export type initialStateType = typeof initialState

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
                profile: {...state.profile, photos: action.photos} as ProfileType
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
        case SET_ABOUT_ME_ERROR: {
            return {
                ...state,
                aboutMeError: action.error,
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

type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}

export const setUserProfile = (profile: ProfileType): setUserProfileType => ({
    type: SET_USER_PROFILE,
    profile
})

type setOwnerActionType = {
    type: typeof SET_OWNER
    profile: ProfileType
}

export const setOwner = (profile: ProfileType): setOwnerActionType => ({
    type: SET_OWNER,
    profile
})

type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}

export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status
})

type DeletePostActionType = {
    type: typeof DELETE_POST
    id: number
}
export const deletePost = (id: number): DeletePostActionType => ({
    type: DELETE_POST,
    id
})

type SavePhotoActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}

export const savePhotoSuccess = (photos: PhotosType): SavePhotoActionType => ({
    type: SAVE_PHOTO_SUCCESS,
    photos
})

type ToggleLikeActionType = {
    type: typeof TOGGLE_LIKE
    id: number
    likeOrUnlike: boolean
}

export const toggleLike = (id: number, likeOrUnlike: boolean): ToggleLikeActionType => ({
    type: TOGGLE_LIKE,
    id,
    likeOrUnlike
})

type SetAboutMeError = {
    type: typeof SET_ABOUT_ME_ERROR,
    error: string;
}

export const setAboutMeError = (error: string): SetAboutMeError => ({
    type: SET_ABOUT_ME_ERROR,
    error
})

//THC
export const getUserProfile = (userId: number, userOrOwner: boolean = false) => async (dispatch: any) => {
    let response = await profileAPI.getProfile(userId);
    userOrOwner ?
        dispatch(setOwner(response.data)) :
        dispatch(setUserProfile(response.data));
}
export const getUserStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file: any) => async (dispatch: any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
    }
}

export const saveProfile = (profile: any, id: number) => async (dispatch: any) => {
    let response = await profileAPI.saveProfile(profile);

    if (response.data.resultCode === 0) {

        dispatch(getUserProfile(id))
    }
    if (response.data.resultCode === 1) {

        return response.data.messages[0];
    }
    return ""
}


export default profileReducer;