import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchHouseholds } from "../actions/households";


class Household extends Component {


    componentDidMount() {
        this.props.dispatch(fetchHouseholds());
    }


    // refreshData() {
    //     this.setState({
    //         currentHousehold: null,
    //         currentIndex: -1,
    //     });
    // }

    // setActiveHousehold(household, index) {
    //     this.setState({
    //         currentHousehold: household,
    //         currentIndex: index,
    //     });
    // }

    render() {
        let error = this.props.households.error;
        let loading = this.props.households.loading;
        let households = this.props.households.items;
        if (loading) {
            return <div className="spinner-border" role="status"></div>;
        }
        if (error) {
            return <div>Error! {error.message}</div>
        } 
            return (
                <div className="container">
                    <div className="col-md-6">
                        <h4>Households List</h4>

                        <ul className="list-group">
                            {
                              households.data.map(house => (
                                  <li>{house.hshd_num}</li>
                              ))
                            }
                        </ul>
                    </div>
                </div>
            );
        
    }
}

const mapStateToProps = (state) => ({
    households: state ? state.household : [],
    loading: state ? state.loading : true,
    error: state ? state.error: null
});

export default connect(mapStateToProps)(Household);