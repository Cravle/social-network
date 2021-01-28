import React from 'react'
import s from "./Users.module.css";

import User from './User'
import Paginator from "../comoon/Paginator/Paginator";

let Users = (props) => {

    return (
        <div className={s.wrapper}>
            <Paginator currentPage={props.currentPage}
                       onPageChanged={props.onPageChanged}
                       totalItemsCount={props.totalUsersCount}
                       pageSize={props.pageSize}
            />
            {
                props.users.map(u =>
                    <User
                        key={u.id}
                        user={u}
                        followingInProgress={props.followingInProgress}
                        unfollow={props.unfollow}
                        follow={props.follow}
                        isAuth={props.isAuth}
                    />
                )
            }
        </div>

    )
}
export default Users;