import { connect } from 'react-redux';
import TodoForm from './TodoForm';

const mapDispatchToProps = dispatch => ({
    addTodo: (value) => {
        dispatch({type: "ADD_TODO", value})
    }
})

export default connect(null, mapDispatchToProps)(TodoForm);