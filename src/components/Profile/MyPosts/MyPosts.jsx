import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {

    
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.wrapper}>
            <div className={s.friends}>
                <h4>Friends</h4>
            </div>

            <div className={s.posts}>
                <h4>My posts</h4>
                <div className={s.postWrapper}>
                    <textarea name="post" id="post" cols="10" rows="50"></textarea>

                    <div className={s.btnWrapper}>
                        <button className={s.btn}>Add post</button>
                    </div>

                </div>
                {postsElements}


            </div>

        </div>
    )

}

export default MyPosts;