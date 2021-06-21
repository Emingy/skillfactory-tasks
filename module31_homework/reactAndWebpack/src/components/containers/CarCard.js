import { connect } from 'react-redux';
import { getCard } from '../actions/carCard';
import { CarCard } from '../components/CarCard';

const mapDispatchToProps = dispatch => ({
    getCard: () => dispatch(getCard()),
})

const mapStateToProps = state => ({
    car: state.carCard.items,
    isLoading: state.carCard.isLoading
})
export default connect(mapStateToProps, mapDispatchToProps)( CarCard )