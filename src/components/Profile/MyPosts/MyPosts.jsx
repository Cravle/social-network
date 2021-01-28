import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reduxForm, reset} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {PostTextArea} from "../../comoon/FormsCntrols/FormsControls";

//TODO загрузка профиле во время загрузки приложения
const maxLength10 = maxLengthCreator(100);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postWrapper}>
            <Field
                component={PostTextArea}
                validate={[required, maxLength10]}
                type={"text"}
                name={'post'}
                errorclass={s.errorMsg}
                placeholder={'Type your thoughts...'}

            />

            <div className={s.btnWrapper}>
                <button type={"submit"} className={s.btn}>Add post
                </button>
            </div>

        </form>
    )
}

const afterSubmit = (result, dispatch) =>
    dispatch(reset('post'));

const PostReduxForm = reduxForm({
    form: 'post',
    onSubmitSuccess: afterSubmit,
})(PostForm)

const MyPosts = React.memo(props => {

    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   key={p.id}
                                                   likesCount={p.likesCount}
                                                   liked={p.liked}
                                                   profile={props.profile}
                                                   toggleLike={props.toggleLike}
                                                   id={p.id}
    />)

    let onSubmit = (formData) => {

        props.addPost(formData.post);
    }


    return (
        <div className={s.wrapper}>
            <div className={s.empty}/>

            <div className={s.posts}>
                <h4 className={s.title}>My posts</h4>
                <PostReduxForm onSubmit={onSubmit}
                />
                {postsElements}


            </div>

        </div>
    )

});

export default MyPosts;