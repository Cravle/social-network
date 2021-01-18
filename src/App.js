import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect} from "react-redux";
import {getAuthUserData} from "./Redux/auth-reducer";
import {compose} from "redux";


class App extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Route path="/profile/:userId?"
                               render={() => <ProfileContainer/>}
                        />
                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}
                        />
                        <Route path="/users"
                               render={() => <UsersContainer/>}
                        />

                        <Route path="/news"
                               render={() => <News/>}
                        />
                        <Route path="/music"
                               render={() => <Music/>}
                        />
                        <Route path="/settings"
                               render={() => <Settings/>}
                        />
                        <Route path="/login"
                               render={() => <LoginContainer/>}
                        />
                    </div>

                </div>
            </BrowserRouter>
        );
    }
}

let mapStateToProps = (state) => ({})

export default compose(
    withRouter,
    connect(mapStateToProps, {getAuthUserData}))
(App);
