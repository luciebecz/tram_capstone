import React from 'react';
import { Link } from 'react-router';
import { handleLogout } from '../actions/auth';
import { connect } from 'react-redux';
import TramLogoWhite from '../images/TramLogoWhite.png';



class MaterialNavbar extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.dispatch({ type: 'FORGET' })
    this.props.dispatch(handleLogout());
  }

  componentDidMount() {
    $(".button-collapse").sideNav({
    });
  }

  authLinks = () =>{
    let { auth } = this.props;
    if(auth && auth.isAuthenticated) {
      return(
        <ul>
          <li><Link to='/about_us'><b>A B O U T - T R A M</b></Link></li>
          <li><Link to='/user_profile'><b>H O M E</b></Link></li>
          <li><a href='#' onClick={this.logout}><b>L O G O U T</b></a></li>
        </ul>
      )
    } else {
      return(
        <ul>
          <li><Link to='/about_us'><b>A B O U T - T R A M</b></Link></li>
          <li><Link to='/login'><b>L O G I N</b></Link></li>
          {/*<li><Link to='/sign_up'>SIGNUP</Link></li>*/}
        </ul>
      );
    }
  }

  render() {
    return(
      <header>
        <div className='nav-wrapper'>
          <nav id='nav' className='blue-grey darken-3'>
            <div className='nav-wrapper'>
              <Link to='/'><img src={TramLogoWhite} className='nav-logo'/></Link>
              <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons nav_menu_icon">menu</i></a>
              <ul className='right hide-on-med-and-down'>
                { this.authLinks() }
              </ul>
              <ul className='side-nav' id='mobile-demo'>
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

