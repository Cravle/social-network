import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import {Field, reset, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {PostTextArea} from "../../comoon/FormsCntrols/FormsControls";


const maxLength10 = maxLengthCreator(10);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.postWrapper}>
            <Field
                component={PostTextArea}
                validate={[required, maxLength10]}
                type={"text"}
                name={'post'}
                errorClass={s.errorMsg}
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

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message}
                                                   key={p.id}
                                                   likesCount={p.likesCount}/>)


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

}

export default MyPosts;