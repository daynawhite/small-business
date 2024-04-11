import { connect } from 'react-redux'
import Listings from '../components/Listings'
import { removeBiz } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeBiz: (index) => dispatch(removeBiz(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listings)