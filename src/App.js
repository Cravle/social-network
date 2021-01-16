import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginContainer from "./components/login/LoginContainer";


const App = (props) => {
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


export default App;
