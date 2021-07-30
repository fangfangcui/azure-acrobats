import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTransactions } from "../actions/transactions";
import LineGraph from "./line-graph.component";

class OneA extends Component {


    getById(obj, property){
        let i;
        let array = [];
        for(i = 0; i < obj.length; i++){
            array.push(obj[i][property]);
        }
        return array;
    }

    componentDidMount() {
        this.props.dispatch(fetchTransactions());
    }

    render() {
        let terror = this.props.terror;
        let tloading = this.props.tloading;
        let transactions = this.props.transactions;
        if (tloading) {
            return [
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="spinner-border" role="status"></div>
                    </div>
                </div>
            ]
        }
        if (terror) {
            return [
            <div className="container">
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div>Error! {terror.message}</div>
                </div>
            </div>
            ]
        } 
            return (
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Household Spending Over Time</h2>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(transactions.data[0], "sum")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Collective Sum of All Transactions"/>
                    </div>
                </div>
            );
        
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transaction.items,
    tloading: state.transaction.loading,
    terror: state.transaction.error,
});

export default connect(mapStateToProps)(OneA);