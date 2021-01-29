import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {HashRouter, Redirect, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/comoon/preloader/Preloader";
import store from "./Redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


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

                <div className="app-wrapper">
                    <Route exact path={"/"}>
                        <Redirect to={"/profile"}/>
                    </Route>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Suspense fallback={<Preloader/>}>
                            <Route path="/profile/:userId?"
                                   render={() => <ProfileContainer/>}
                            />
                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}
                            />
                        </Suspense>

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

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App);

let SocialNetworkApp = () => {
    return <HashRouter /*basename={process.env.PUBLIC_URL}*/>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}

export default SocialNetworkApp;