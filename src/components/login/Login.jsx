import React from 'react';
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../comoon/FormsCntrols/FormsControls";
import {required} from "../../utils/validators/validators";
import {Redirect} from "react-router-dom";

//TODO react-hook-form

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    type="email"
                    placeholder={"email"}
                    name={"email"}
                    component={Input}
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
                       validate={[required]}
                />
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button type={"submit"}>Log in</button>
            </div>
            {props.error &&
            <div className={s.formSummaryError}>
                {props.error}
            </div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData);
        props.postAuthLogin(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div className={s.wrapper}>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}


export default Login;