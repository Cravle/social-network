import React from 'react';
import s from './Post.module.css';
import userPhoto from "../../../../assets/img/user.jpg";
import heart from "../../../../assets/img/heart.svg";
import heartClicked from "../../../../assets/img/heart-clicked.svg";


const Post = (props) => {
    return (
        <div className={s.wrapper}>
            <img className={s.ava}
                 src={props.profile && props.profile.photos.small ? props.profile.photos.small : userPhoto}
                 alt=""/>
            <div className={s.inner}>
                <div className={s.content}>
                    <h4 className={s.name}>{props.profile && props.profile.fullName}</h4>
                    {props.message}
                </div>
                <div className={s.likeWrapper}>

                    <div className={s.count}>
                        {props.likesCount}
                    </div>
                    <div className={s.imgWrapper} onClick={() => props.toggleLike(props.id)}>
                        <img className={s.like} src={props.liked ? heartClicked : heart} alt=""/>
                    </div>


                </div>
            </div>


        </div>

    )


}

export default Post;