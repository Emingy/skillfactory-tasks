import { connect } from 'react-redux'
import { searchCars } from '../actions/cars';
import { SearchCar } from "../components/SearchCar";

const mapDispatchToProps = dispatch => ({
    searchCar: data => dispatch(searchCars(data)),
});

export default connect(null, mapDispatchToProps)(SearchCar)