import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTransactions } from "../actions/transactions";
import { fetchCategories } from "../actions/categories";
import LineGraph from "./line-graph.component";

class OneB extends Component {


    getById(obj, property, name){
        let i;
        let j = 0;
        let array = [];
        let validMonths = ["8","9","10","11","12","1","2","3","4","5","6","7","8","9","10","11","12","1","2","3","4","5","6","7","8"];
        if(name){
            for(i = 0; i < obj.length; i++){
                if(String(obj[i]["commodity"]) == name){
                    if(obj[i]["month/year"].startsWith(validMonths[j])){
                        array.push(obj[i][property]);
                    } else{
                        array.push(0);
                        array.push(obj[i][property]);

                        j = j + 1;
                    }
                    j = j + 1;
                }
            }
        } else {
            for(i = 0; i < obj.length; i++){
                array.push(obj[i][property]);
            }
        }
        return array;
    }

    componentDidMount() {
        this.props.dispatch(fetchTransactions());
        this.props.dispatch(fetchCategories());
    }

    render() {
        let terror = this.props.terror;
        let tloading = this.props.tloading;
        let transactions = this.props.transactions;
        let cerror = this.props.cerror;
        let cloading = this.props.cloading;
        let categories = this.props.categories;
        if (tloading || cloading) {
            return [
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div className="spinner-border" role="status"></div>
                    </div>
                </div>
            ]
        }
        if (terror || cerror) {
            if(terror && !cerror){
                return [
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <div>Error! {terror.message}</div>
                    </div>
                </div>
                ]
            } else if(cerror && !terror){
                return [
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>Error! {cerror.message}</div>
                        </div>
                    </div>
                    ]
            } else {
                return [
                    <div className="container">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <div>Errors: {terror.message}, {cerror.message}</div>
                        </div>
                    </div>
                    ]
            }
            
        } 
            return (
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Changing Customer Engagement By Category Over Time</h2>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "ACTIVITY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Activity Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "ALCOHOL")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Alcohol Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "AUTO")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Auto Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "BABY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Baby Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "BAKERY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Bakery Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "BEVERAGE - NON WATER")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Beverage - Non Water Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "BEVERAGE - WATER")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Beverage - Water Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "BULK PRODUCTS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Bulk Products Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "CANNED GOODS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Canned Goods Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "CLOTHING")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Clothing Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "COSMETICS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Cosmetics Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "DAIRY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Dairy Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "DELI")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Deli Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "DRY GOODS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Dry Goods Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "ELECTRONICS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Electronics Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "FLORAL")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Floral Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "FROZEN FOOD")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Frozen Food Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "GIFT")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Gift Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "GROCERY STAPLE")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Grocery Staple Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "HOLIDAY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Holiday Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "HOUSEHOLD")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Household Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "IN STORE FOOD SERVICE")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of In Store Food Service Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "INTERNATIONAL FOOD")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of International Food Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - BEEF")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat - Beef Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - CHICKEN")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat - Chicken Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - OTHER")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat - Other Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - PORK")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat - Pork Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - POULTRY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat Poultry Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - SAUSAGE")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat Sausage Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEAT - TURKEY")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Meat Turkey Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEDICAL SUPPLIES")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Medical Supplies Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MEDICATION")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Medication Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "MISC")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Miscellaneous Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "OUTDOOR")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Outdoor Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "PERSONAL CARE")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Personal Care Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "PET")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Pet Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "PRODUCE")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Produce Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "SEAFOOD")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Seafood Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "SEASONAL PRODUCTS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Seasonal Products Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "SPECIALTY FOOD")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Specialty Food Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "TOBACCO PRODUCTS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Tobacco Products Commodity"/>
                        <LineGraph labels={this.getById(transactions.data[0], "year")} data={this.getById(categories.data[0], "sum", "TOYS")} yaxis="Total Amount Spent in US Dollars" xaxis="Month and Year" title="Sum of Toys Commodity"/>
                    </div>
                </div>
            );
        
    }
}

const mapStateToProps = (state) => ({
    transactions: state.transaction.items,
    tloading: state.transaction.loading,
    terror: state.transaction.error,
    categories: state.category.items,
    cloading: state.category.loading,
    cerror: state.category.error
});

export default connect(mapStateToProps)(OneB);