import React, {useState} from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../comoon/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/user.jpg";
import SocialLinks from "../../comoon/SocialLinks/SocialLinks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileData = ({status, updateUserStatus, profile, isOwner, goToEditMode}) => {
    return (
        <div className={s.description}>

            <h1>{profile.fullName}</h1>
            <div/>

            <div className={s.edit}>
                {isOwner &&
                <button onClick={() => goToEditMode()} className={s.editBtn}>Edit</button>
                }
            </div>
            
            <div>
                <ProfileStatusWithHooks
                    status={status}
                    updateUserStatus={updateUserStatus}
                    isOwner={isOwner}
                />
                <div><b>About me: </b> {profile.aboutMe}</div>
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
            <div/>

        </div>
    )
}


const ProfileInfo = ({profile, status, updateUserStatus, saveProfile, ...props}) => {
    const [editMode, setEditMode] = useState(false);

    const goToEditMode = () => {
        setEditMode(true)
    }

    const outFromEditMode = () => {
        setEditMode(false);
    }

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

                {editMode ?
                    <ProfileDataForm outFromEditMode={outFromEditMode}
                                     saveProfile={saveProfile}
                                     profile={profile}
                    /> :
                    <ProfileData
                        isOwner={props.isOwner}
                        status={status}
                        updateUserStatus={updateUserStatus}
                        profile={profile}
                        goToEditMode={goToEditMode}
                    />
                }
            </div>

        </div>

    )
}

export default ProfileInfo;