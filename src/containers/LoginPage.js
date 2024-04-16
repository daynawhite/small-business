import { connect } from 'react-redux'
import NavBar from '../components/NavBar'
import userEvent from '@testing-library/user-event'

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addUser: (biz) => dispatch(addUser(user))
    }
}

export default connect(mapStateToProps)(NavBar)