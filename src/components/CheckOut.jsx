import React, { Component } from 'react';
import "../css/checkout.css";

export default class CheckOut extends Component {

    state = {
        newobj: []
    }
    CheckOutCompleted = () => {
        const { history } = this.props;

        if (history) history.push({
            pathname: '/'
        });
        alert("Payment Successfull! Your car will reach our doorstep within next 5 minutes.");
    }

    deleteVehicle = (id) => {
        // current - rest of the task 
        let filteredList = JSON.parse(localStorage.getItem('vehicleList')).filter(function (vehicle) { return vehicle.id !== id; })
        this.setState({
            valetList: filteredList
        });
        localStorage.setItem('vehicleList', JSON.stringify(filteredList))
        this.CheckOutCompleted();
    }

    componentWillMount() {
        console.log(this.props.location.state);
        this.newobj = this.props.location.state.data;
        console.log("newobj : ", this.newobj)
    }

    render() {
        return (

            <div className="checkin-container">
                <h2>Vechile Check-in</h2>
                <div className="row1">
                    <h5>Vehicle Number</h5>

                    <h5>Vehicle Type</h5>

                    <h5>Vehicle Model</h5>

                </div>

                <div className="row1-input">
                    <input type="text" className="vnum" value={this.newobj.vnum} disabled />
                    <input type="text" className="vtype" value={this.newobj.vtype} disabled />
                    <input type="text" className="vmodel" value={this.newobj.vmodel} disabled />
                </div>
                <div className="row2">
                    <h5>Phone Number</h5>
                    <h5>Customer Name</h5>
                </div>

                <div className="row2-input">
                    <input type="number" className="vphn" value={this.newobj.vphn} disabled />
                    <input type="text" className="vcus" value={this.newobj.vcus} disabled />
                </div>

                <div className="toPayBox">
                    <h4>To Pay</h4>
                    <h3>Rs. 80</h3>
                </div>

                <div className="submit">
                    <button onClick={() => this.deleteVehicle(this.newobj.id)}>Proceed To Pay</button>
                </div>
            </div>

            //             <div className="input-container">
            //                 Vehicle Number
            //                 <input type="text" className="vnum" value={this.newobj.vnum}
            //                     disabled />
            //                 Vehicle Type
            //                 <input type="text" className="vtype" value={this.newobj.vtype}
            //                     disabled />

            //                 Vehicle Model
            //                 <input type="text" className="vmodel" value={this.newobj.vmodel}
            //                     disabled />
            //                 Phone Number
            //                 <input type="number" className="vphn" value={this.newobj.vphn}
            //                     disabled />
            //                 Customer Name
            //                 <input type="text" className="vcus" value={this.newobj.vcus}
            //                     disabled />

            //                 <button onClick={() => this.deleteVehicle(this.newobj.id)}>Proceed To Pay</button>
            //             </div>


            // <div className="checkin-container">
            // <h2>Vechile Check-in</h2>
            // <div className="row1">
            //     <h5>Vehicle Number</h5>

            //     <h5>Vehicle Type</h5>

            //     <h5>Vehicle Model</h5>

            // </div>

            // <div className="row1-input">
            // <input type="text" className="vnum" value={this.state.vnum}
            //     onChange={this.handleCurrDetail} />
            //     <select id="dropdown" className="vtype" onChange={this.handleCurrDetail}>
            //     <option>Select</option>
            //     <option value="2-wheeler">2-wheeler</option>
            //     <option value="4-wheeler">4-wheeler</option>
            // </select>
            // <input type="text" className="vmodel" value={this.state.vmodel}
            //     onChange={this.handleCurrDetail} />
            // </div>
            // <div className="row2">
            //     <h5>Phone Number</h5>

            //         <h5>Customer Name</h5>

            // </div>

            // <div className="row2-input">
            // <input type="number" className="vphn" value={this.state.vphn}
            //     onChange={this.handleCurrDetail} />
            //      <input type="text" className="vcus" value={this.state.cus}
            //     onChange={this.handleCurrDetail} />

            // </div>

            // <div className="submit">
            // <button onClick={this.CheckInCompleted} >Check In</button>
            // </div>               
            // </div>
        )
    }
}