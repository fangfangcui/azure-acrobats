import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Profile from "./components/profile.component";
import Dashboard from "./components/dashboard.component";
import EventBus from "./common/EventBus";
import AuthService from "./services/auth.service";

import { clearMessage } from "./actions/message";

import { history } from './helpers/history';
import Households from "./components/households.component";
import Transactions from "./components/transactions.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };

    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      currentUser: undefined,
    });
    window.location.reload();
  }

  render() {
    const { currentUser } = this.state;

    return (
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand myTestClass">
              AzureAcrobats
            </Link>
            <div className="navbar-nav mr-auto">
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    Account
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/dashboard"} className="nav-link">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/households"} className="nav-link">
                    Households
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/transactions"} className="nav-link">
                    Transactions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" onClick={this.logOut}>
                    Log Out
                  </Link>
                </li>
              </div>
            ) : (
              <div>
                
              </div>
            )}
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={"/", "/login"} component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/households" component={Households} />
              <Route exact path="/transactions" component={Transactions} />
            </Switch>
          </div>
        </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state.auth;
  const { household } = state.household;
  const { transaction } = state.transaction;
  return {
    user,
    household,
    transaction
  };
}

export default connect(mapStateToProps)(App);