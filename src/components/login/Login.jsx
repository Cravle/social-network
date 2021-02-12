import React from 'react';
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../comoon/FormsCntrols/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

//TODO react-hook-form

const LoginForm = ({handleSubmit, error, ...props}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    type="email"
                    placeholder={"email"}
                    name={"email"}
                    component={Input}
                    witherror={1}
                    errorclass={s.errorMsg}
                    validate={[required]}
                />
            </div>
            <div>
                <Field type="password"
                       placeholder={"Password"}
                       name={"password"}
                       component={Input}
                       errorclass={s.errorMsg}
                       witherror={1}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            {props.withCaptcha &&
            <div>
                <img
                    src={props.captchaUrl}
                    alt="captcha"/>
                <Field
                    type="text"
                    placeholder={""}
                    name={"captcha"}
                    component={Input}
                    witherror={1}
                    errorclass={s.errorMsg}
                    validate={[required]}
                />
            </div>
            }
            <div>
                <button type={"submit"}>Log in</button>
            </div>
            {error &&
            <div className={s.formSummaryError}>
                {error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.postAuthLogin(formData.email, formData.password, formData.rememberMe, formData.captcha);
        console.log(formData);
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.wrapper}>
        <h1>Login</h1>
        <LoginReduxForm
            withCaptcha={props.withCaptcha}
            onSubmit={onSubmit}
            captchaUrl={props.captchaUrl}
        />
    </div>
}


export default Login;