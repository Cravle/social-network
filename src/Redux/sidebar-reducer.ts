type FriendsType = {
    avaUrl: string,
    name: string,
    id: number,
}


let initialState = {
    friends: [
        {
            avaUrl: 'https://sun1-83.userapi.com/c841023/v841023761/1d95c/jblyV5wP3EM.jpg',
            name: "Temi",
            id: 9,
        },
        {
            avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
            name: "Vitalya",
            id: 2,
        }
    ] as Array<FriendsType>
};

type initialStateType = typeof initialState

const sidebarReducer = (state = initialState, action: any): initialStateType => {


    return state;
}

export default sidebarReducer;