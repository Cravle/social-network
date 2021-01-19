import React from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../Redux/users-reducer";
import Users from "./Users";
import Preloader from "../comoon/preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthReditect";
import {compose} from "redux";
import {

    getPageSize,
    getTotalUsersCount,
    getCurrentPage, getIsFetching, getFollowingInProgress, getUsers
} from "../../Redux/users-selectors";


class UsersContainer extends React.Component {


    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }


    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

//
// let mapStateToProps = state => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//
//     }
// }

let mapStateToProps = state => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}


export default compose(
    connect(mapStateToProps,
        {
            //actions
            follow,
            unfollow,
            setCurrentPage,
            toggleFollowingProgress,
            //thunks
            requestUsers,
        }
    )
)(UsersContainer)