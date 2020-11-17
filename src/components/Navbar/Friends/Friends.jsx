import React from 'react';
import s from './Friends.module.css'

import FriendItem from "./FriendItem/FriendItem";


const Friends = (props) => {

    let friendElement = props.state.friends.map(f => <FriendItem name={f.name}
                                                                 avaUrl={f.avaUrl}
                                                                 id={f.id}/>)


    return (
        <div className={s.friends}>
            <h4 className={s.title}>Friends</h4>
            {friendElement}
        </div>
    );
}
export default Friends;