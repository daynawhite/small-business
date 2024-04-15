import { connect } from 'react-redux'
import AddBiz from '../components/AddBiz'
import { addBiz } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBiz: (biz) => dispatch(addBiz(biz))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBiz)