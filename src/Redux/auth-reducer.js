import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA',
    SET_CAPTCHA = 'SET-CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    withCaptcha: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }
        case SET_CAPTCHA :
            return {
                ...state,
                captchaUrl: action.captchaUrl,
                withCaptcha: true
            }
        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
})

export const setCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA,
    captchaUrl,
})

//is auth? for header
export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        //dispatch(getUserProfile(id));
    }


}

//login
export const postAuthLogin = (email, password, rememberMe, captcha = '') => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else if (response.data.resultCode === 10) {
        let message2 = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {
            _error: `${message2}`
        }));
        let response2 = await securityAPI.captcha();
        dispatch(setCaptcha(response2.data.url));
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {
            _error: `${message}`
        }));
    }


}

export const deleteAuthLogin = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}


export const getCaptcha = () => async (dispatch) => {
    let response2 = await securityAPI.captcha();
    dispatch(setCaptcha(response2.data.url));
}

export default authReducer;