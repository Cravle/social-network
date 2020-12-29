import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
   
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostCreator());
    }

    const onPostChange = (postMessage) => {

        props.store.dispatch(updateNewPostTextCreator(postMessage));
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )

}

export default MyPostsContainer;