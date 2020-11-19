import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = () => {
        let postMessage = newPostElement.current.value;

        props.dispatch(updateNewPostTextActionCreator(postMessage));
    }

    return (
        <div className={s.wrapper}>
            <div/>

            <div className={s.posts}>
                <h4 className={s.title}>My posts</h4>
                <div className={s.postWrapper}>
                    <textarea className={s.textarea}
                              ref={newPostElement}
                              value={props.newPostText}
                              placeholder={'Type your thoughts...'}
                              onChange={onPostChange}
                              name="post"
                              id="post"
                              cols="10"
                              rows="50"/>

                    <div className={s.btnWrapper}>
                        <button onClick={addPost} className={s.btn}>Add post
                        </button>
                    </div>

                </div>
                {postsElements}


            </div>

        </div>
    )

}

export default MyPosts;