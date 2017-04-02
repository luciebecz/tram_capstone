import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';
import TramLogo from '../images/TramLogo.png';


class MaterialNavbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatch(handleLogout());
  }

  authLinks = () =>{
    let { auth } = this.props;
    if(auth && auth.isAuthenticated) {
      return(
        <ul>
        <li><Link to='/about_us'>ABOUT TRAM</Link></li>
        <li><Link to='/user_profile'>HOME</Link></li>
        <li><a href='#' onClick={this.logout}>LOGOUT</a></li>
        </ul>
      )
    } else {
      return(
        <ul>
        <li><Link to='/about_us'>ABOUT TRAM</Link></li>
        <li><Link to='/login'>LOGIN</Link></li>
        {/*<li><Link to='/sign_up'>SIGNUP</Link></li>*/}
        </ul>
      );
    }
  }

  render() {
    return(
      <header>
        <div className='navbar-fixed'>
          <nav id='nav' className='blue-grey darken-3'>
            <div className='nav-wrapper'>
              <Link to='/' className='nav-logo'><img src={TramLogo} /></Link>
              <ul className='right'>
                { this.authLinks() }
              </ul>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

export default connect(mapStateToProps)(MaterialNavbar);
