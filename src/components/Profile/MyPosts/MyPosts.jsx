import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = () => {
    return (

        <div className={s.posts}>
            My posts
            <div className="">
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )

}

export default MyPosts;