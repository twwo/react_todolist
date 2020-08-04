import { connect } from 'react-redux';
import Todo from '../components/Todo'

const mapDispatchToProps = dispatch => ({
    deleteTodo: (index) => {
        dispatch({type: "DELETE_TODO", index})
    }
})

export default connect(null,mapDispatchToProps)(Todo);