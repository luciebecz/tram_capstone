import React from 'react';
import { Link } from 'react-router';
import { updateUser} from '../actions/user';
import { connect } from 'react-redux';

class UserUpdate extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let first_name = this.refs.first_name.value;
    let last_name = this.refs.last_name.value;
    this.props.dispatch(updateUser(first_name, last_name));
  }


  render() {
    return(
      <div className='row body_width'>
          <h3>Update Your Account</h3>
          <form ref='signupForm' onSubmit={ this.handleSubmit }>
            <input ref='first_name' type='text' required placeholder='First Name' defaultValue={this.props.user.first_name} />
            <br />
            <input ref='last_name' type='text' required placeholder='Last Name' defaultValue={this.props.user.last_name} />
            <br />
            <input type='submit' className='btn blue-grey darken-3' value='Update Profile' onClick={this.handleSubmit}/>
            <Link to={'/user_profile'} className='btn grey darken-2'>Cancel</Link>
          </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user }
}

export default connect(mapStateToProps)(UserUpdate);
