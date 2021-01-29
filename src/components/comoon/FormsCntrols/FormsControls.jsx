import React from 'react';
import s from './FormsControls.module.css'
//TODO исправить стили форм
const FormControl = ({
                         input,
                         meta: {touched, error},
                         child,
                         errorclass,
                         witherror = 0,
                         ...props
                     }) => {
    const hasError = touched && error;
    return (
        <div className={s.messageWrapper}>
            <div className={hasError && witherror ? s.borderError : ""}>
                {props.children}
            </div>
            {hasError && witherror === 1 &&
            <span className={errorclass}>{error}</span>
            }
        </div>
    )
}

export const PostTextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea className={s.post}
                      placeholder={props.placeholder}
                      {...input} {...restProps}/>
        </FormControl>
    )
}


export const MessageTextArea = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <textarea className={s.message}
                      placeholder={props.placeholder}

                      {...input} {...restProps}/>
        </FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return (
        <FormControl {...props}>
            <input
                placeholder={props.placeholder}

                {...input} {...restProps}/>
        </FormControl>
    )
}

export const CreateField = () => {

}