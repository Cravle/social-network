import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {deleteAuthLogin, getCaptcha, postAuthLogin} from "../../Redux/auth-reducer";


//TODO react-hook-form
//TODO Api логинизация

class LoginContainer extends React.Component {
    render() {
        return (
            <Login
                isAuth={this.props.isAuth}
                postAuthLogin={this.props.postAuthLogin}
                getCaptcha={this.props.getCaptcha}
                withCaptcha={this.props.withCaptcha}
                captchaUrl={this.props.captchaUrl}
            />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    withCaptcha: state.auth.withCaptcha,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {
    postAuthLogin,
    deleteAuthLogin,
    getCaptcha,

})(LoginContainer);