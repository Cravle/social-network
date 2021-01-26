import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Redirect, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/comoon/preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }


    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <>
                {/*{this.props.location.hash === "" && <Redirect to={'/profile'}/>}*/}
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
            </>
        );
    }
}

let mapStateToProps = (state) => ({
    initialized: state.app.initialized,

})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);
