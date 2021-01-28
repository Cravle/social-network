import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../comoon/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.jpg";

//TODO отобразить всю инфу с  https://social-network.samuraijs.com/api/1.0/profile/2
const ProfileInfo = ({profile, status, updateUserStatus, ...props}) => {
    if (!profile) {
        return <Preloader/>
    } else
        return (
            <div className={s.myPage}>


                <div className={s.info}>
                    <div className={s.ava}>
                        <div className={s.ava__wrapper}>
                            <img
                                src={profile.photos.large || userPhoto}
                                alt=""/>
                        </div>
                    </div>
                    <div className={s.description}>
                        <h1>{profile.fullName || "Vladyslav Loboda"}</h1>

                        <ProfileStatusWithHooks
                            status={status}
                            updateUserStatus={updateUserStatus}
                        />

                        <div>{profile.aboutMe}</div>
                        <div>{profile.lookingForAJob ?
                            `В поиске работы: ${profile.lookingForAJobDescription}` :
                            "Работу не ищу"}</div>
                        <div>social links:</div>

                    </div>

                </div>
            </div>
        )
}

export default ProfileInfo;