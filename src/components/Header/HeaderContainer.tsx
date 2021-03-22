import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {deleteAuthLogin} from "../../Redux/auth-reducer";
import {compose} from "redux";
import {ProfileType} from "../../types/types";

type PropsType = {
    deleteAuthLogin: () => void

    isAuth: boolean
    login: string | null
    owner: ProfileType
    profile: ProfileType
}

const HeaderContainer = (props: PropsType) => {
    return (
        <Header {...props}/>
    )
}


const mapStateToProps = (state: any) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
    owner: state.profilePage.owner,
})


export default compose(
    connect(mapStateToProps, {deleteAuthLogin}), /*withRouter*/)(HeaderContainer);