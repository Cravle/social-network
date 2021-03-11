import React, {Suspense} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, /*HashRouter,*/ Redirect, Route, withRouter} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/comoon/preloader/Preloader";
import store from "./Redux/redux-store";


//TODO лайк без авторизации


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {
    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("Some error occured");
        console.error(promiseRejectionEvent);
    }


    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <>

                <div className="app-wrapper">


                    <HeaderContainer/>
                    <Navbar/>
                    <Route exact path={"/"}>
                        <Redirect to={"/profile"}/>
                    </Route>
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
                        {/*<Route path="*"*/}
                        {/*       render={() => <div>404 NOT FOUND</div>}*/}
                        {/*/>*/}
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
    return <BrowserRouter /*basename={process.env.PUBLIC_URL}*/>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SocialNetworkApp;