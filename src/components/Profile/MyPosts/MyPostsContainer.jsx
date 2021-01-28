import {addPost, toggleLike} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (newPostText) => {
//             dispatch(addPost(newPostText));
//         }
//
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost, toggleLike})(MyPosts)

export default MyPostsContainer;