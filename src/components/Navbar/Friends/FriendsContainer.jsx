import React from 'react';
import {connect} from "react-redux";
import Friends from "./Friends";


/*const Friends = (props) => {
    let friendElement = props.state.friends.map(f => <FriendItem name={f.name}
                                                                 avaUrl={f.avaUrl}
                                                                 id={f.id}/>)


    return (
        <div className={s.friends}>
            <h4 className={s.title}>Friends</h4>
            {friendElement}
        </div>
    );
}*/

let mapStateToProps = (state) => {

    return {
        friends: state.sidebar.friends
    }
}


const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer;