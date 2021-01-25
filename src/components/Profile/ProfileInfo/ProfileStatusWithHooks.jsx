import React, {useState, useEffect} from 'react';
import s from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
            <h3 onDoubleClick={activateEditMode} value={status}>
                {status || "-----"}
            </h3>
            }
            {editMode &&
            <input
                onBlur={deactivateEditMode}
                autoFocus={true}
                onChange={onStatusChange}
                value={status}
            />
            }
        </div>
    )

}

export default ProfileStatusWithHooks
