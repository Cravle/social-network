import React from 'react';
import Login from "./Login";
import {connect} from "react-redux";
import {postAuthLogin} from "../../Redux/auth-reducer";


//TODO react-hook-form
//TODO Api логинизация

class LoginContainer extends React.Component {
    render() {
        return (
            <Login
                isAuth={this.props.isAuth}
                postAuthLogin={this.props.postAuthLogin}
            />
        )
    }
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})


export default connect(mapStateToProps, {
    postAuthLogin
})(LoginContainer);