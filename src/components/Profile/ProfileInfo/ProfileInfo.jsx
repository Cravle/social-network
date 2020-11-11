import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div className={s.myPage}>
            <div className={s.shapka}>
                <img src="https://bgfons.com/upload/asphalt_texture409.jpg" alt=""/>
            </div>

            <div className={s.info}>
                <div className={s.ava}>
                    <div className={s.ava__wrapper}>
                        <img
                            src="https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg"
                            alt=""/>
                    </div>
                </div>
                <div className={s.description}>
                    <div>Vladyslav Loboda</div>
                    <div>18 years old</div>
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;