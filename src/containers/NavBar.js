import { connect } from 'react-redux'
import NavBar from '../components/NavBar'

const mapStateToProps = (state) => {
    return {
        username: state.username
    }
}


export default connect(mapStateToProps)(NavBar)