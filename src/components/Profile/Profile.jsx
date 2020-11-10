import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.shapka}>
                <img src="https://bgfons.com/upload/asphalt_texture409.jpg" alt="" />
            </div>

            <div className={s.ava}>
                <div className="ava__wrapper">
                    <img src="https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg" alt="" />
                </div>
    description
        </div>
            <MyPosts />
        </div>
    )
}

export default Profile;