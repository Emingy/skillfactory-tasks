import { connect } from 'react-redux';
import { getCars } from '../actions/cars';
import { RequireCarList } from '../components/RequireCarList';

const mapDispatchToProps = dispatch => ({
    getCars: () => dispatch(getCars()),
})

const mapStateToProps = state => ({
    cars: state.car.items,
    isLoading: state.car.isLoading
})

export default connect(mapStateToProps, mapDispatchToProps)( RequireCarList )