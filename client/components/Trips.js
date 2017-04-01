import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { joinATrip } from '../actions/trips';
import SearchTrips from './SearchTrips';
import GoogleMap from './GoogleMap';

class Trips extends React.Component {

  setCollapsible() {
    setTimeout(function(){
      $('.collapsible').collapsible();
    }, 500);
  }

  joinTrip = (id) => {
    this.props.dispatch(joinATrip(id))
  }

  render() {
    this.setCollapsible()
    let trips = this.props.trips.map( trip => {
      if(trip.user_id !== this.props.user.id  && trip.available_seats != 0) {
        return (
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <b className='blue-grey-text text-darken-1'>{trip.name}</b>
                <h6 className='toggle'>Click to view details</h6>
                <br />
                <h6>Date: {trip.date}</h6>
              </div>
              <div className="collapsible-body">
                <span>
                  <h6>Resort/Drop Off Location: {trip.end_address}</h6>
                  <br />
                  <h6>Pickup Time: {trip.pickup_time}</h6>
                  <br />
                  <h6>Departure Time: {trip.departure_time}</h6>
                  <br />
                  <h6>Pickup Location: {trip.start_address}</h6>
                  <br />
                  <h6>Car: {trip.car_make} {trip.car_model} </h6>
                  <br />
                  <h6>Available Seats Left: {trip.available_seats}</h6>
                  <br />
                  <button onClick={ () =>{this.joinTrip(trip.id)} } className='btn blue-grey darken-3'>Join This Trip</button>
                </span>
              </div>
            </li>
          </ul>
        )
      }
    });
    if(trips.length !== 0 ) {
      return (
        <div>
          <SearchTrips />
          {trips}
        </div>
      )
    } else {
      return (
        <h5>No Available Trips to Join</h5>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips, user: state.auth}
}
export default connect(mapStateToProps)(Trips);
