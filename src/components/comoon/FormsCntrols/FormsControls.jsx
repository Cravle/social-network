import React from 'react';
import s from './FormsControls.module.css'
//TODO исправить стили форм
const FormControl = ({input, meta, child, errorClass, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.messageWrapper}>
            <div className={hasError ? s.borderError : ""}>
                {props.children}
            </div>
            {hasError &&
            <span className={errorClass}>{meta.error}</span>
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

// export const PostTextArea = ({input, meta, ...props}) => {
// const hasError = meta.touched && meta.error;
// return (
// <div>
// <div>
// <textarea className={s.post + " " + (hasError ? s.error : "")}
//                           placeholder={props.placeholder} {...input}/>
//             </div>
//             {hasError &&
//             < span className={s.errorMsg}>{meta.error}</span>
//             }
//         </div>
//     )
// }

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
// export const MessageTextArea = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={s.messageWrapper}>
//             <div>
//             <textarea className={s.message + " " + (hasError ? s.error : "")}
//                       placeholder={props.placeholder} {...input}
//             />
//
//             </div>
//             {hasError &&
//             < div className={s.errorMsgAbs}>{meta.error}</div>
//             }
//         </div>
//     )
// }

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

// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error;
//     return (
//         <div className={s.messageWrapper}>
//             <div>
//                 <input className={+" " + (hasError ? s.error : "")}
//                        placeholder={props.placeholder} {...input}
//                 />
//
//             </div>
//             {hasError &&
//             < div className={s.errorMsg}>{meta.error}</div>
//             }
//         </div>
//     )
// }