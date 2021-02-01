import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../comoon/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.jpg";
import SocialLinks from "../../comoon/SocialLinks/SocialLinks";

//TODO отобразить всю инфу с  https://social-network.samuraijs.com/api/1.0/profile/2
const ProfileInfo = ({profile, status, updateUserStatus, ...props}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    
    return (
        <div className={s.myPage}>


            <div className={s.info}>
                <div className={s.ava}>
                    <div className={s.ava__wrapper}>
                        <img
                            src={profile.photos.large || userPhoto}
                            alt=""/>
                    </div>
                    {props.isOwner &&
                    <input className={s.fileInput} type={'file'} onChange={onMainPhotoSelected}/>}

                </div>
                <div className={s.description}>

                    <h1>{profile.fullName}</h1>
                    <div/>
                    <div>
                        <ProfileStatusWithHooks
                            status={status}
                            updateUserStatus={updateUserStatus}
                            isOwner={props.isOwner}
                        />

                        <div>{profile.aboutMe}</div>
                        <div> {profile.lookingForAJob ?
                            <div className={s.job}><b> Looking for a job</b> : yes
                                <div>
                                    <b>About job:</b> {profile.lookingForAJobDescription}
                                </div>
                            </div> :
                            <div>
                                <b>Looking for a job: </b>no
                            </div>}
                        </div>
                    </div>

                    <div>
                        <h3>About me:</h3>
                        <div>My social links:</div>

                        <SocialLinks
                            profileContacts={profile ? profile.contacts : null}/>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default ProfileInfo;