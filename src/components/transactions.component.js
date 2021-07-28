import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTransactions } from "../actions/transactions";
import ExampleScatter from "./example-scatter.component";

class Transaction extends Component {


    getById(obj, property){
        let i;
        let array = [];
        for(i = 0; i < obj.length; i++){
            console.log(obj[i][property]);
            console.log(obj[i]);
            array.push(obj[i][property]);
        }
        return array;
    }

    componentDidMount() {
        this.props.dispatch(fetchTransactions());
    }

    render() {
        let error = this.props.transactions.error;
        let loading = this.props.transactions.loading;
        let transactions = this.props.transactions.items;
        console.log(transactions);
        // console.log(this.getById(transactions.data[0], "year"));
        // console.log(this.getById(transactions.data[0], "sum"));
        if (loading) {
            return <div className="spinner-border" role="status"></div>;
        }
        if (error) {
            return <div>Error! {error.message}</div>
        } 
            return (
                <div className="container">
                    <div className="col-md-6">
                        <h4>Transactions List</h4>
                        <ExampleScatter labels={this.getById(transactions.data[0], "year")} data={this.getById(transactions.data[0], "sum")}/>
                    </div>
                </div>
            );
        
    }
}

const mapStateToProps = (state) => ({
    transactions: state ? state.transaction : [],
    loading: state ? state.loading : true,
    error: state ? state.error: null
});

export default connect(mapStateToProps)(Transaction);