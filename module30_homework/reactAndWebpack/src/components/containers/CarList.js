import { connect } from 'react-redux';
import { getCars } from '../actions/cars';
import { CarList } from '../components/CarList';

const mapDispatchToProps = dispatch => ({
    getCars: () => dispatch(getCars()),
})

const mapStateToProps = state => ({
    cars: state.car.items,
    isLoading: state.car.isLoading
})
export default connect(mapStateToProps, mapDispatchToProps)( CarList )