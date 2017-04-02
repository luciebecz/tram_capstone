import React from 'react';
import { connect } from 'react-redux';
import { getUser, deleteUser, updateUser } from '../actions/user';
import { getTrips } from '../actions/trips';
import { Link } from 'react-router';
import UserTrips from './UserTrips';
import DriverTrips from './DriverTrips';
import RiderTrips from './RiderTrips';
import SnowReports from './SnowReports';

// display user profile:
// show scheduled trips... linked to trip model
// show cars... linked by cars model
// Ride section: create, join
// Link create ride(if user has car) Link to new trip form,
// Link create ride(if user doesn't have car) Link to new car form first, then link to trip form
// Join: Link to trips model to show all available trips
// import settings bar (update account, close account, update user info, manage cars, logout)

class UserProfile extends React.Component {

  componentDidMount() {
    $(".button-collapse").sideNav();
    this.props.dispatch(getUser(), updateUser());
    this.props.dispatch(getTrips());
  }

  deleteAccount = () => {
    this.props.dispatch(deleteUser(this.props.history));
  }

  render() {
    let user = this.props.user;
    return(
      <div className='body_width'>
        <div className='user_header_name'>
          <h3><b>Hello {user.first_name} {user.last_name}!</b></h3>
        <div>
          <ul id="slide-out" className="side-nav">
            <li><div className="userView">
              <div className="background">
              </div>
              <div>
                {user.first_name} {user.last_name}<hr />
              </div>
              <div>
                <h6>Your Username: {user.username}</h6> <br />
              </div>
              </div></li><br />
            <li><a className="subheader">ACCOUNT SETTINGS</a></li>
            <li><div className="divider"></div></li>
            <Link to={'/cars'}>MANAGE CARS</Link>
            <Link to={'/user_update'}>UPDATE ACCOUNT</Link>
            <li><a className="waves-effect" onClick={ () => {this.deleteAccount()} }>CANCEL ACCOUNT</a></li>
          </ul>
            <a data-activates="slide-out" className="button-collapse btn blue-grey darken-2"><h6 className=" user_header">USER SETTINGS</h6></a>
            <Link to='/snowreports' className='btn blue-grey darken-2'>Snow Reports</Link>
          </div>
        </div>
        <br />
        <div className='rider_loop'>
          <div className='col s6'>
            <h5 className='rider_header'>My Joined Trips</h5>
            <Link to='/trips' className='btn blue-grey darken-2 ride_btn'>Join A Trip</Link>
          <div>
            <RiderTrips />
          </div>
        </div>
        </div>
        <br />
        <div className='trip_loop'>
          <div className='col s6'>
            <h5 className='trip_header'>My Created Trips</h5>
            <Link to='/newtrip' className='btn blue-grey darken-2 ride_btn'>Create A Ride</Link>
          <div>
            <DriverTrips />
          </div>
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return { user: state.user, trips: state.trips }
}

export default connect(mapStateToProps)(UserProfile);