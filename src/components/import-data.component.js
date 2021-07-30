import React, { Component } from "react";
import { connect } from "react-redux";


const n = 3;
const mylabel = ["households", "products", "transactions"];

class ImportData extends Component {

    constructor() {
        super();
        this.state = {
          file: null,
          checkboxes: new Array(n).fill().map((_, i) => !i),
        };
        this.handleFileChange.bind(this);
      }

    onChange(e, changedIndex) {
    // it is a good habit to extract things from event variable
    const { checked } = e.target;
    
    this.setState(state => ({
        // this lets you unselect all.
        // but selected can be anly one at a time
        checkboxes: state.checkboxes.map((_, i) => i === changedIndex ? checked : false),
    }));
    }


    handleFileChange({target: {files}}) {
        const maxSize = 50000;
        const [file] = files;
    
        if (file.size <= maxSize) {
          alert('the file size is valid')
        } else {
          alert(
            `The file you are trying to upload is ${file.size} bytes. ` +
            `The maximum file size is ${maxSize} bytes.`
          )
        }
      }
    

    render() {
        const { checkboxes } = this.state;
            return (
                <div className="container">
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <h2>Import New Data</h2>
                        <p>Please input one file at a time and select destination</p>
                        <input type="file" accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={this.handleFileChange}/>
                        {checkboxes.map((item, i) => (
                            <label>
                        <input
                            key={i}
                            type="checkbox"
                            checked={item}
                            onChange={e => this.onChange(e, i) /* notice passing an index. we will use it */}
                        />  {mylabel[i]}</label>
                        ))}
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

export default connect(mapStateToProps)(ImportData);