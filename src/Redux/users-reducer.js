const FOLLOW = 'FOLLOW',
    UNFOLLOW = 'UNFOLLOW',
    SET_USERS = 'SET-USERS',
    SET_CURRENT_PAGE = 'SET-CURRENT-PAGE',
    SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

let initialState = {
    users: [

        // {
        //     id: 1,
        //     followed: false,
        //     fullName: 'Vitalya M.',
        //     status: 'PS master',
        //     location: {
        //         country: 'Usa',
        //         city: 'Los-Angeles',
        //     },
        //     avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     fullName: 'Vitya',
        //     location: {
        //         country: 'Belarus',
        //         city: 'Minsk',
        //     },
        //     status: 'Motion and design pro',
        //     avaUrl: 'https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1',
        // },
        // {
        //     id: 3,
        //     followed: true,
        //     fullName: 'Artem',
        //     location: {
        //         country: 'Ukraine',
        //         city: 'Odessa',
        //     },
        //     status: "I'm in game?",
        //     avaUrl: 'https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1',
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     fullName: 'Den',
        //     location: {
        //         country: 'Russia',
        //         city: 'Vladivostok',
        //     },
        //     status: 'Metal',
        //     avaUrl: 'https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/',
        // },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                }),
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                }),
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
        default:
            return state;

    }


}

export const followAC = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollowAC = (userId) => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users) => (
    {
        type: SET_USERS,
        users,
    }
)

export const setCurrentPageAC = (currentPage) => (
    {
        type: SET_CURRENT_PAGE,
        currentPage,
    }
)

export const setTotalUsersCountAC = (totalUsersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        count: totalUsersCount,
    }
)
export default usersReducer;