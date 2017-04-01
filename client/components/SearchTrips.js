import React from 'react';
import Trip from './Trip';
import { connect } from 'react-redux';
import { getTrips, setFilter } from '../actions/trips';
import { Link } from 'react-router';

class SearchTrips extends React.Component {
  resetForm = (e) => {
    e.preventDefault();
    this.setState = { term: ''}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let term = this.refs.term.value
    if(term === '') {
      this.props.dispatch(getTrips());
    }
    this.props.dispatch(setFilter(this.refs.term.value));
  }

  render() {
      return(
        <div className='search_bar_container body_width'>
          <h5 className='search_header'><b>SEARCH:</b></h5>
          <form className='search_form' onSubmit={this.handleSubmit}>
            <input ref='term' placeholder='Search Name of Destination or Resort' />
          </form>
          <Link to='/trips' onClick={ () => {this.resetForm()} } className='search_btn btn grey darken-1'>Clear Search</Link>
        </div>
      );
  }
}

export default connect()(SearchTrips);
