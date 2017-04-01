import React from 'react';
import { addTrip } from '../actions/trips';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { addCar, updateCar } from '../actions/cars';

class NewTrip extends React.Component {

  componentDidMount() {
    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 2
      });
    $('select').material_select();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let name = this.refs.name.value;
    let date = this.refs.date.value;
    let pickup_time = this.refs.pickup_time.value;
    let departure_time = this.refs.departure_time.value;
    let route_flexibility = this.refs.route_flexibility.value;
    let start_address = this.refs.start_address.value;
    let end_address = this.refs.end_address.value;
    let available_seats = this.refs.available_seats.value;
    let car_make = this.refs.car_make.value;
    let car_model = this.refs.car_make.value;
    let car_4wd = this.refs.car_chains.value;
    let car_chains = this.refs.car_chains.value;
    this.props.dispatch(addTrip(name, date, pickup_time, departure_time,
                                route_flexibility, start_address, end_address, available_seats, car_make, car_model, car_4wd, car_chains
                                ));
  }


  render() {
    // let user = this.props.user
    return (
      <div className='container'>
      <form onSubmit={this.handleSubmit}>
        <h6><b>Destination Name:</b></h6>
        <input ref='name' type='text' required placeholder='Type where you are going here' />
        <br />
        <h6><b>Trip Date:</b></h6>
        <input type='date' className='datepicker' ref='date' type='text' required placeholder='Select the date you are going on this trip here'  />
        <br />
        <h6><b>Pick Up Time:</b></h6>
        <input ref='pickup_time' type='text' required placeholder='Type the time you are leaving for this trip here'  />
        <br />
        <h6><b>Departure Time:</b></h6>
        <input ref='departure_time' type='text' placeholder='Type the time you are leaving the trip destination from here'  />
        <br />
        <h6><b>Route Flexibility:</b></h6>
        <input ref='route_flexibility' type='text' placeholder='Type yes or no if you are willing to make additional stops along the way to your destination'  />
        <br />
        <h6><b>Start Address:</b></h6>
        <input ref='start_address' type='text' placeholder='Type the address you are leaving for your trip on here'  />
        <br />
        <h6><b>End Address:</b></h6>
        <input ref='end_address' type='text' placeholder='Type the address of your destination here'  />
        <br />
        <h6><b>Seats Available For This Trip:</b></h6>
        <input ref='available_seats' type='text' placeholder='Type how many seats are available for other riders on this trip here' />
        <br />
        <br />
          <h4>What Car Are You Taking For This Trip?</h4>
          <input ref='car_make' type='text' placeholder='What Is the Make of your Car?' />
          <br />
          <input ref='car_model' type='text' placeholder='What Is the Model of your Car?' />
          <br />
          <input ref='car_4wd' type='text' placeholder='Does Your Car Have Four Wheel Drive?' />
          <br />
          <input ref='car_chains' type='text' placeholder='Do You Have Chains For Your Car?' />
          <br />
        <input type='submit' className='btn blue-grey darken-2' />
        <Link to='/user_profile' className='btn grey darken-2'>Cancel</Link>
      </form>
      </div>
    )
  }
}


export default connect()(NewTrip);
