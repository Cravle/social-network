import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div className={s.shapka}>
            <img src="https://bgfons.com/upload/asphalt_texture409.jpg" alt="" />
        </div>

        <div className={s.ava}>
            <div className="ava__wrapper">
                <img src="https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg" alt="" />
            </div>
        description
        1
        2
        3
    </div>
        <div className={s.posts}>
            <div className={s.item}>posts </div>
            <div className={s.item}>new post</div>
            <div className={s.item}>post 1</div>
            <div className={s.item}>post 2</div>
        </div>
    </div>
}

export default Profile;