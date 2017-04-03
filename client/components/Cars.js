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

  showChains = (id) => {
    let chains = this.props.chains
    if (chains === true)  {
      return 'Chains'
    } else {
      return 'No Chains'
    }
  }

  showFourWheelDrive = (id) => {
    let fourWheelDrive = this.props.four_by_four
    if (fourWheelDrive === true) {
      return '4WD'
    } else {
      return 'No 4WD'
    }
  }

  render() {
    let cars = this.props.cars.map( car => {
      return (
        <div key={car.id} className='body_width'>
          <li><h5><u>{car.make} {car.model}</u></h5></li>
          <li><h6>{this.showChains(car.id)}</h6></li>
          <li><h6>{this.showFourWheelDrive(car.id)}</h6></li>
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
  return { cars: state.cars,
            car: state.cars.find( c => c.id == props.params.id ) }
}

export default connect(mapStateToProps)(Cars);
