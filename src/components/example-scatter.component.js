import React, { Component } from "react";
import { Line } from "react-chartjs-2";


class ExampleScatter extends Component {

    render() {
        return (
            <div>
                <Line
                    height={600} width={1000}
                    data={
                        {
                            labels: this.props.labels,
                            datasets: [
                                {
                                    label: false,
                                    fill: false,
                                    lineTension: 0.5,
                                    backgroundColor: 'rgba(75,192,192,1)',
                                    borderColor: 'rgba(0,0,0,1)',
                                    borderWidth: 2,
                                    data: this.props.data
                                }
                            ]
                        }
                    }
                    options={{
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },

                        scales: {
                            y: {
                                title: {
                                    display: true,
                                    text: 'Total Amount Spent in US Dollars',
                                    fontSize: 20,
                                }

                            }
                        }
                    }} />
            </div>
        );
    }
}

export default ExampleScatter;