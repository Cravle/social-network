import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
})

//is auth? for header
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true));
                }
            });
    }
}

//login
export const postAuthLogin = (email, password, rememberMe) => {
    return (dispatch) => {


        authAPI.login(email, password, rememberMe)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(getAuthUserData());
                    } else {
                        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
                        dispatch(stopSubmit("login", {
                            _error: `${message}`
                        }));
                    }
                }
            )
    }
}

export const deleteAuthLogin = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}

export default authReducer;