import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <div>
                    <NavLink className={s.dialog} activeClassName={s.active} to="/dialogs/1">Vitalya</NavLink>
                </div>

                <div>
                    <NavLink className={s.dialog} activeClassName={s.active} to="/dialogs/2">Vitya</NavLink>
                </div>

                <div>
                    <NavLink className={s.dialog} activeClassName={s.active} to="/dialogs/3">Artem</NavLink>
                </div>

                <div>
                    <NavLink className={s.dialog} activeClassName={s.active} to="/dialogs/4">Den</NavLink>
                </div>

            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is your web-site?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}

export default Dialogs;