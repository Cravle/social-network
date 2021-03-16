import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'social-network/auth/SET-USER-DATA',
    SET_CAPTCHA = 'social-network/auth/SET-CAPTCHA';


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
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
            }
        default:
            return state;

    }
}

type setAuthUserDataActionPayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}

type setAuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: setAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataActionType => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
})

type setCaptchaActionType = {
    type: typeof SET_CAPTCHA
    captchaUrl: string
}

export const setCaptcha = (captchaUrl: string): setCaptchaActionType => ({
    type: SET_CAPTCHA,
    captchaUrl,
})

//is auth? for header
export const getAuthUserData = () => async (dispatch: any) => {
    let response = await authAPI.me();

    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
        //dispatch(getUserProfile(id));
    }


}

//login
export const postAuthLogin = (email: string, password: string, rememberMe: boolean, captcha = '') => async (dispatch: any) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10)
            dispatch(getCaptcha());

        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {
            _error: `${message}`
        }));
    }


}

export const deleteAuthLogin = () => async (dispatch: any) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }

}


export const getCaptcha = () => async (dispatch: any) => {
    let response2 = await securityAPI.captcha();
    dispatch(setCaptcha(response2.data.url));
}

export default authReducer;