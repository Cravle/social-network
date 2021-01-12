import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= 90/*pagesCount*/; i++) {
        pages.push(i);
    }
    return (
        <div className={s.wrapper}>
            <div>
                {pages.map(p => {
                        return (
                            <button
                                key={p}
                                className={props.currentPage === p && s.selectedPage || s.pageBtn}
                                onClick={(e) => {
                                    props.onPageChanged(p);
                                }
                                }>{p}
                            </button>
                        )
                    }
                )}

            </div>
            {
                props.users.map(u =>
                    <div className={s.usersWrapper} key={u.id}>
                        <div className={s.avaBtnWrapper}>
                            <div>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                         className={s.ava}
                                         alt=""/>
                                </NavLink>
                            </div>

                            <div className={s.btnWrapper}>
                                {u.followed ?
                                    <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        className={s.fbtn}
                                        onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            followAPI.unfollow(u.id)
                                                .then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id);
                                                });

                                        }
                                        }>
                                        Unfollow
                                    </button> :
                                    <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        className={s.fbtn}
                                        onClick={() => {
                                            props.toggleFollowingProgress(true, u.id);
                                            followAPI.follow(u.id)
                                                .then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                    props.toggleFollowingProgress(false, u.id);

                                                });
                                        }}>Follow</button>}

                            </div>
                        </div>

                        <div className={s.info}>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{"u.location.country"}</div>
                                <div>{"u.location.city"}</div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    )
}
export default Users;