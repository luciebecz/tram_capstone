import React from 'react';
import { connect } from 'react-redux';
import { deleteTrip, updateTrip } from '../actions/trips';
import { Link } from 'react-router';
import GoogleMap from './GoogleMap';

class ShowDriverTrips extends React.Component {
  state = { edit: false, car: {} }

  toggleEdit = () => {
    this.setState({ edit: !this.state.edit });
  }

  cancelTrip = (id) => {
    this.props.dispatch(deleteTrip(id));
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
      console.log(data);
    })
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
    let id = this.props.params.id
    this.props.dispatch(updateTrip(
      name, date, pickup_time, departure_time,
      route_flexibility, start_address, end_address, available_seats, id));
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
  show = () => {
    let trip = this.props.trip || {};
    if(Object.keys(trip).length && (trip.user_id == this.props.user.id) ) {
      return (
        <div className='body_width'>
        <h1>Trip Details</h1>
          <div>
            <button className='btn blue-grey darken-3' onClick={ () =>{this.toggleEdit()} }>Edit This Trip</button>
            <Link to={'/user_profile'} className='btn blue-grey darken-3'>Back to My Profile</Link>
            <button onClick={ () =>{this.cancelTrip(trip.id)} } className='btn blue-grey darken-3'>Delete Trip</button>
          </div>
        <hr />
        <h4>Name: {trip.name}</h4>
        <p>Date: {trip.date}</p>
        <p>Pick Up Time: {trip.pickup_time}</p>
        <p>Departure Time: {trip.departure_time}</p>
        <p>Route Flexibility: {trip.route_flexibility}</p>
        <p>Start Address: {trip.start_address}</p>
        <p>End Address: {trip.end_address}</p>
        <p>Seats Available: {trip.available_seats}</p>
        <p>Joined Rider Usernames: {trip.rider_username.map( (name, i) => { return <li key={i}> {name}</li>; })}</p>
        <br />
        <h5>Chat With Your Fellow Riders Here</h5>
        <form ref={n => this.form = n } onSubmit={this.submitMessage}>
          <input ref={ n => this.message = n } />
        </form>
        <ul className="collection">
          { this.messages() }
        </ul>
        <GoogleMap trip={trip} />
        </div>
      );
    } else {
      return(<h3>You Have No Created Trips, Please Create One</h3>)
    }
  }

    edit = () => {
      let trip = this.state.trip;
        return(
          <div className='body_width'>
            <h1 className='center'>Edit Trip</h1>
            <form onSubmit={this.handleSubmit}>
              <h6><b>Trip Name:</b></h6>
              <input ref='name' type='text' required placeholder='Trip Name' defaultValue={this.props.trip.name}  />
              <br />
              <h6><b>Date:</b></h6>
              <input ref='date' type='text' required placeholder='Trip Date' defaultValue={this.props.trip.date} />
              <br />
              <h6><b>Pickup time:</b></h6>
              <input ref='pickup_time' type='text' required placeholder='Pick Up Time' defaultValue={this.props.trip.pickup_time} />
              <br />
              <h6><b>Departure Time:</b></h6>
              <input ref='departure_time' type='text' placeholder='Departure Time' defaultValue={this.props.trip.departure_time} />
              <br />
              <h6><b>Route Flexibility:</b></h6>
              <input ref='route_flexibility' type='text' placeholder='Route Flexibility' defaultValue={this.props.trip.route_flexibility} />
              <br />
              <h6><b>Start Address:</b></h6>
              <input ref='start_address' type='text' placeholder='Start Address' defaultValue={this.props.trip.start_address} />
              <br />
              <h6><b>End Address:</b></h6>
              <input ref='end_address' type='text' placeholder='End Address' defaultValue={this.props.trip.end_address} />
              <br />
              <h6><b>Available Seats:</b></h6>
              <input ref='available_seats' type='text' placeholder='Seats Available For This Trip' defaultValue={this.props.trip.available_seats} />
              <br />
              <h4>Edit Car You Are Taking For This Trip</h4>
                <input ref='car_make' type='text' placeholder='What Is the Make of your Car?' defaultValue={this.props.trip.car_make}/>
                <br />
                <input ref='car_model' type='text' placeholder='What Is the Model of your Car?' defaultValue={this.props.trip.car_model} />
                <br />
                <label>Four Wheel Drive?</label>
                  <select >
                    <option ref='car_4wd' value='1'>Yes</option>
                    <option ref='car_4wd' value='0'>No</option>
                  </select>
                <br />
                <label>Chains?</label>
                <select>
                  <option ref='car_chains' value='0'>No</option>
                  <option ref='car_chains' value='1'>Yes</option>
                </select>
                <br />
              <input type='submit' className='btn blue-grey darken-3' />
            </form>
          </div>
        )
      }
    render() {
      return (
        this.state.edit ? this.edit() : this.show ()
      )
    }
  }

  const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    trip: state.trips.find( t => t.id == props.params.id ),
    messages: state.messages.filter( m => m.trip_id == props.params.id )
  }
  }
export default connect(mapStateToProps)(ShowDriverTrips);
