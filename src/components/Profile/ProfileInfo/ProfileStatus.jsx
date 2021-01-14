import React from 'react';
import s from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <h3>{this.props.status}</h3>
                }
                {this.state.editMode &&
                <input value={this.props.status}/>
                }
            </div>
        )
    }
}

export default ProfileStatus
