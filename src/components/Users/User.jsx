import React from 'react'
import s from "./Users.module.css";
import userPhoto from "../../assets/img/user.png";
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollow, follow}) => {

    return (

        <div className={s.usersWrapper}>
            <div className={s.avaBtnWrapper}>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={s.ava}
                             alt=""/>
                    </NavLink>
                </div>

                <div className={s.btnWrapper}>
                    {user.followed ?
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={s.fbtn}
                            onClick={() => {
                                unfollow(user.id);
                            }}>
                            Unfollow
                        </button> :
                        <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            className={s.fbtn}
                            onClick={() => {

                                follow(user.id);
                            }}>
                            Follow
                        </button>}

                </div>
            </div>

            <div className={s.info}>
                <div>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </div>
                <div>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </div>
            </div>
        </div>


    )
}
export default User;