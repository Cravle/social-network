import React from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();
//                     let addPost = () => {
//                         store.dispatch(addPostCreator());
//                     }
//
//                     const onPostChange = (postMessage) => {
//
//                         store.dispatch(updateNewPostTextCreator(postMessage));
//                     }
//                     return (
//                         <MyPosts
//                             updateNewPostText={onPostChange}
//                             addPost={addPost}
//                             posts={state.profilePage.posts}
//                             newPostText={state.profilePage.newPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
//
// }

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator());
        },
        updateNewPostText: (postMessage) => {

            dispatch(updateNewPostTextCreator(postMessage));
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;