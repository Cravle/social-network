import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'social-network/app/INITIALIZED-SUCCESS';


export type InititalStateType = {
    initialized: boolean
}

let initialState: InititalStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any): InititalStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;

    }
}

type initializedSuccessActionType = {
    type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): initializedSuccessActionType => ({
    type: INITIALIZED_SUCCESS,

})

export const initializeApp = () => (dispatch: any) => {

    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;