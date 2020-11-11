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
            <Post message='Hi, how are you?' likesCount='11' />
            <Post message="It's my first post" likesCount='44' />

        </div>
    )

}

export default MyPosts;