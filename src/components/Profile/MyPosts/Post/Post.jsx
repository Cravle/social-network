import React from 'react';
import s from './Post.module.css';

const Post = (props) => {



    return (
        <div className={s.item}>
            <img src="https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg" alt="" />
            {props.message}
            <div className=""><span>{props.likesCount} ♥</span></div>


        </div>

    )


}

export default Post;