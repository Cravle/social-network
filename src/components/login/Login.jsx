import React from 'react';
import s from "./Login.module.css"
import {Field, reduxForm} from "redux-form";

//TODO react-hook-form
//TODO Api логинизация

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field type="email" placeholder={"email"} name={"email"} component={"input"}/>
            </div>
            <div>
                <Field type="password" placeholder={"Password"} name={"password"}
                       component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
            </div>
            <div>
                <button type={"submit"}>Log in</button>
            </div>
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
    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}


export default Login;