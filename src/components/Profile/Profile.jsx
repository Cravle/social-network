import React from 'react';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";

import s from "./Profile.module.css"
//TODO Аватарки и имена в friends

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}

export default Profile;