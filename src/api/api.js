import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "a02890c1-7f85-4705-9a7d-cd656428919f"
    }
});

export const usersAPI = {
    getUsers: (currentPage = 1, pageSize = 5) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`,
        ).then(response => response.data);
    }
}

export const followAPI = {
    follow: (userId) => {
        return instance.post(`follow/${userId}`)
            .then(response => response.data)
    },
    unfollow: (userId) => {
        return instance.delete(`follow/${userId}`)
            .then(response => response.data)
    }
}
