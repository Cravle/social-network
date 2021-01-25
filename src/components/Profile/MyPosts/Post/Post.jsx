import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

    return (
        <div className={s.wrapper}>
            <img
                src={props.profile && props.profile.photos.small ? props.profile.photos.small : "https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg"}
                alt=""/>
            <div>
                {props.message}
                <div className=""><span>{props.likesCount} ♥</span></div>
            </div>


        </div>

    )


}

export default Post;