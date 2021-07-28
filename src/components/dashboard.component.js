import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import ExampleScatter from "./example-scatter.component";


class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: {
                id: null,
                username: "",
                email: "",
            },
            message: "",
        };
    }

    render() {
        const { user: currentUser } = this.props;
        if (!currentUser) {
            console.log("nope");
            return <Redirect to="/login" />;
        }

        return (
            <div className="container">
                <header className="jumbotron">
                    <h3>
                        <strong>Dashboard</strong>
                    </h3>
                </header>
                <ExampleScatter/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { user } = state.auth;
    return {
        user,
    };
}

export default connect(mapStateToProps)(Dashboard);