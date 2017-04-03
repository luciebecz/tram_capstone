import React from 'react';
import NewCarForm from './NewCarForm';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { getCars, addCar, updateCar, deleteCar } from '../actions/cars';
import EditCarForm from './EditCarForm';


class Cars extends React.Component {

  componentDidMount() {
    this.props.dispatch(getCars(), updateCar());
  } 

  removeCar = (id) => {
    this.props.dispatch(deleteCar(id));
  }

  render() {
    let cars = this.props.cars.map( car => {
      return (
        <div key={car.id} className='body_width'>
          <li><h5><u>{car.make} {car.model}</u></h5></li>
          <li><h6>Has Chains? {car.chains.toString()}</h6></li>
          <li><h6>Has 4 Wheel Drive? {car.four_by_four.toString()}</h6></li>
          <br />
          <Link to={`/editcarform/${car.id}`} className='btn blue-grey darken-3'>Edit Car</Link>
          <button onClick={ () => {this.removeCar(car.id)}} className='btn grey darken-2'>Delete</button><br /><br />
        </div>
      );
    });
    return (
    <div>
      <ul>
        <div className='cars_header'>
          <h4 className='cars_header'>Manage Your Cars</h4>
          <Link to='/newcarform' className='cars_header manage_car btn blue-grey darken-3'>Add A Car</Link>
        </div>
        <hr />
        {cars}
      </ul>
    </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { cars: state.cars }
  return { car: state.cars.find( c => c.id == props.params.id ) }
}

export default connect(mapStateToProps)(Cars);