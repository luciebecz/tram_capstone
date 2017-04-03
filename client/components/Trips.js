import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router';
import { joinATrip } from '../actions/trips';
import SearchTrips from './SearchTrips';


class Trips extends React.Component {

  setCollapsible() {
    setTimeout(function(){
      $('.collapsible').collapsible();
    }, 500);
  }

  joinTrip = (id) => {
    this.props.dispatch(joinATrip(id))
  }

  resetForm = (e) => {
    e.preventDefault();
    this.setState = { term: ''}
  }

  render() {
    this.setCollapsible()
    let rider_ids = this.props.rider_ids
    let trips = this.props.trips.map( trip => {
      if(trip.user_id !== this.props.user.id  && trip.available_seats != 0  && !trip.rider_ids.includes(this.props.user.id)) {
        return (
          <ul key={trip.id} className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header">
                <b className='blue-grey-text text-darken-1'>{trip.name}</b>
                <h6 className='toggle'>Click to view details</h6>
                <br />
                <h6><b>Date: {trip.date}</b></h6>
              </div>
              <div className="collapsible-body">
                <span>
                  <h6><b>Resort/Drop Off Location:</b> {trip.end_address}</h6>
                  <br />
                  <h6><b>Pickup Time:</b> {trip.pickup_time}</h6>
                  <br />
                  <h6><b>Departure Time:</b> {trip.departure_time}</h6>
                  <br />
                  <h6><b>Pickup Location:</b> {trip.start_address}</h6>
                  <br />
                  <h6><b>Available Seats Left:</b> {trip.available_seats}</h6>
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
          <hr />
          <div className='container'>
          <h5><b>Current Available Trips:</b></h5>
          {trips}
        </div>
        </div>
      )
    }  else {
      return (
        <div>
        <h5>Your search did not find any available trips.
          Try searching again for a different destination.</h5>
        <Link to='/trips' onClick={ () => {this.resetForm()} } className='search_btn btn grey darken-1'>Search Again</Link>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return { trips: state.trips, user: state.auth}
}
export default connect(mapStateToProps)(Trips);
