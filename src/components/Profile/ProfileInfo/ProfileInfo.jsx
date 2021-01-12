import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../comoon/preloader/Preloader";
//TODO отобразить всю инфу с  https://social-network.samuraijs.com/api/1.0/profile/2
const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    } else
        return (
            <div className={s.myPage}>
                <div className={s.shapka}>
                    <img
                        src={"https://bgfons.com/upload/asphalt_texture409.jpg"}
                        alt=""/>
                </div>

                <div className={s.info}>
                    <div className={s.ava}>
                        <div className={s.ava__wrapper}>
                            <img
                                src={props.profile.photos.large || "https://otvet.imgsmail.ru/download/201890154_cc41733ab1966f78f7c3923f8988db3e_800.jpg"}
                                alt=""/>
                        </div>
                    </div>
                    <div className={s.description}>
                        <div>{props.profile.fullName || "Vladyslav Loboda"}</div>
                        <div>{props.profile.aboutMe}</div>
                        <div>{props.profile.lookingForAJob ?
                            `В поиске работы: ${props.profile.lookingForAJobDescription}` :
                            "Работу не ищу"}</div>
                        <div>social links:</div>
                        <div>{


                        }</div>
                    </div>

                </div>
            </div>
        )
}

export default ProfileInfo;