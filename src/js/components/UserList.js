import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../actions/userAction";

class ConnectedUserList extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.props.getUsers();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.users && nextProps.users.length > 0) {
            this.setState({ users: nextProps.users });
        }
    }

    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.state.users.map(user => (
                    <li className="list-group-item" key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps = state => {
    console.log("STORE STATE FROM USERLIST: ", state);
    return {
        users: state.userReducer.users
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    };
};

const UserList = connect(mapStateToProps, mapDispatchToProps)(ConnectedUserList);

export default UserList;