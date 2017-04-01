import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getUser } from '../actions/user';
import { removeRider } from '../actions/trips';

class JoinedTrips extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUser());
  }

  cancelRide = (id) => {
    this.props.dispatch(removeRider(id));
  }

  submitMessage = (e) => {
    e.preventDefault();
    $.ajax({
      url: `/api/trips/${this.props.trip.id}/message`,
      type: 'POST',
      data: { message: this.message.value }
    }).done( () => {
      this.form.reset()
    }).fail( err => {
      console.log(datea);
    })
  }

  messages = () => {
    return this.props.messages.map( (m, i) => {
      return (
        <li key={i} className="collection-item">
          {m.body}
          <div className="secondary-content">
            {m.name}
          </div>
        </li>
      )
    })
  }

  setCollapsible() {
    setTimeout(function(){
      $('.collapsible').collapsible();
    }, 500);

  }

  render() {
    this.setCollapsible()
    let user = this.props.user;
    let trips = this.props.trips.map( (trip) => {
      if(trip.rider_ids.includes(user.id)) {
        return (
          <ul key={trip.id} className="collapsible" data-collapsible="accordion">
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
                  <h6>Car: {trip.car_make} {trip.car_model}</h6>
                    <h6 className='car_attributes_rider'>- 4WD: {trip.car_4wd}</h6>
                    <h6 className='car_attributes_rider'>- Chains: {trip.car_chains}</h6>
                  <br />
                  <h6>Contact Driver: {trip.driver_username}</h6>
                  <button onClick={ () => {this.cancelRide(trip.id)} }className='btn grey darken-2'>Cancel Pickup</button>
                </span>
                <form ref={n => this.form = n } onSubmit={this.submitMessage}>
                  <input ref={ n => this.message = n } />
                </form>
                <ul className="collection">
                  { this.messages() }
                </ul>
              </div>
            </li>
          </ul>
        );
      }
    });
    if(trips.length != 0) {
      return(
        <div>
          {trips}
        </div>
      );
    } else {
    return(
      <h5>You Haven't Joined Any Trips</h5>
    );
  }
  }
}

const mapStateToProps = (state, props) => {
  return {
    trip: state.trips,
    user: state.user,
    messages: state.messages.filter( m => m.trip_id == props.params.id )
   }
}

export default connect(mapStateToProps)(JoinedTrips);
