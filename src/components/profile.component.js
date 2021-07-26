import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import UserService from "../services/user.service";
import { deleteUser } from "../actions/user";
import AuthService from "../services/auth.service";

class Profile extends Component {

  constructor(props) {
    super(props);
    this.getUser = this.getThisUser.bind(this);
    this.removeUser = this.removeUser.bind(this);

    this.state = {
      currentUser: {
        id: null,
        username: "",
        email: "",
      },
      message: "",
    };
  }



  getThisUser(id) {
    UserService.getUser(id).then((response) => {
      this.setState({
        currentUser: response.data,
      });
      console.log(response.data);
    }).catch((e) => {
      console.log(e);
    })
  }

  removeUser(id) {
    this.props.deleteUser(id).then(() => {
      this.props.history.push("/");
      AuthService.logout();
      this.state.currentUser = undefined;
      window.location.reload();
      this.forceUpdate();
    }).catch((e) => {
      console.log(e);
    })
  }


  render() {
    const { user: currentUser } = this.props;
    if (!currentUser) {
      return <Redirect to="/login" />;
    }

    return (
      <div className="container">
        <header className="jumbotron">
          <h3>
            Welcome home, <strong>{currentUser.username}</strong>!
          </h3>
        </header>
        <p>
          <strong>Token:</strong> {currentUser.accessToken}
        </p>
        <p>
          The email you have registered with is: <strong>{currentUser.email}</strong>
        </p>
        <p>
          If this is not correct, you can delete your account and create a new one:
        </p>
        <button className="btn btn-danger btn-block" onClick={() => {this.removeUser(currentUser.id)}}>Delete Account</button>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {user} = state.auth;
  return {
    user,
  };
}

export default connect(mapStateToProps, {deleteUser})(Profile);