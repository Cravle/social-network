import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {deleteAuthLogin} from "../../Redux/auth-reducer";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import Profile from "../Profile/Profile";

class HeaderContainer extends React.Component {


    render() {
        return (
            <Header {...this.props}/>
        )
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
    isOwner: state.profilePage.isOwner
})


export default compose(
    connect(mapStateToProps, {deleteAuthLogin}), /*withRouter*/)(HeaderContainer);