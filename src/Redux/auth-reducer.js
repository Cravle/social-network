import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true,
            }


        default:
            return state;

    }
}

export const setAuthUserData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {userId, email, login},
})

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
}

export const postAuthLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    alert("авторизация успешна")
                    getAuthUserData();
                } else
                    alert("Ошибка авторизации")
            })
    }
}

export default authReducer;