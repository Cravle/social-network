import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";
import {UsersType} from "../types/types";


const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT',
    TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING',
    TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS';


let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,// array of usersId
};

type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS: {
            return {
                ...state,
                users: [...action.users]
            }
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;

    }

}

type FollowSuccessActionType = {
    type: typeof FOLLOW
    userId: number
}

export const followSuccess = (userId: number): FollowSuccessActionType => ({
    type: FOLLOW,
    userId
})

type UnFollowSuccessActionType = {
    type: typeof UNFOLLOW
    userId: number
}

export const unfollowSuccess = (userId: number): UnFollowSuccessActionType => ({
    type: UNFOLLOW,
    userId
})

type SetUsersActionType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}

export const setUsers = (users: Array<UsersType>): SetUsersActionType => (
    {
        type: SET_USERS,
        users,
    }
)

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}

export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => (
    {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
)

type SetTotalUsersCountActionType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}


export const setTotalUsersCount = (totalUsersCount: number): SetTotalUsersCountActionType => (
    {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    }
)

type ToggleIsFetchingActionType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}

export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching,
    }
)

type ToggleFollowingProgressActionType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number): ToggleFollowingProgressActionType => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
)

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page))

    let data = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));

}

const followUnfollowFlow = async (dispatch: any, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode === 0) {
        dispatch(actionCreator(userId))

    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number) => async (dispatch: any) => {

    followUnfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess);


}
export const unfollow = (userId: number) => async (dispatch: any) => {

    followUnfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess);


}

export default usersReducer;