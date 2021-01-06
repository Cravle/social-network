import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.png';

let Users = (props) => {

    let Users = () => {
        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data.items);
                });

            // props.setUsers([
            //     {
            //         id: 1,
            //         followed: false,
            //         fullName: 'Vitalya M.',
            //         status: 'PS master',
            //         location: {
            //             country: 'Usa',
            //             city: 'Los-Angeles',
            //         },
            //         avaUrl: 'https://sun1-19.userapi.com/c846417/v846417031/17ee5a/kuSfbkTPN7A.jpg',
            //     },
            //     {
            //         id: 2,
            //         followed: true,
            //         fullName: 'Vitya',
            //         location: {
            //             country: 'Belarus',
            //             city: 'Minsk',
            //         },
            //         status: 'Motion and design pro',
            //         avaUrl: 'https://sun1-18.userapi.com/impg/Q0EYZ5ioRUY_dqim4PlwR1WrsjdgU76SIjUZZw/h2Thm-Pj-ac.jpg?size=50x0&quality=96&crop=1,271,1616,1616&sign=f0d66ba6963daa0429927bb440f501e0&ava=1',
            //     },
            //     {
            //         id: 3,
            //         followed: true,
            //         fullName: 'Artem',
            //         location: {
            //             country: 'Ukraine',
            //             city: 'Odessa',
            //         },
            //         status: "I'm in game?",
            //         avaUrl: 'https://sun1-83.userapi.com/impf/c841023/v841023761/1d95c/jblyV5wP3EM.jpg?size=50x0&quality=96&crop=183,304,522,522&sign=e4128216c90b1cf25b88a8455dd49e5b&ava=1',
            //     },
            //     {
            //         id: 4,
            //         followed: false,
            //         fullName: 'Den',
            //         location: {
            //             country: 'Russia',
            //             city: 'Vladivostok',
            //         },
            //         status: 'Metal',
            //         avaUrl: 'https://steamuserimages-a.akamaihd.net/ugc/179412883250505688/55C716B686C3D74A20BBCB73D83EF8C21F1EBBC9/',
            //     },
            // ]);
        }
    }
//TODO сделать верстку /users

    return <div>
        <button onClick={Users}>Get Users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}
                             className={s.ava}
                             alt=""/>
                    </div>

                    <div>
                        {u.followed ?
                            <button onClick={() => props.unfollow(u.id)}>Unfollow</button> :
                            <button onClick={() => props.follow(u.id)}>Follow</button>}

                    </div>
                </span>

                    <span>
                        <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;