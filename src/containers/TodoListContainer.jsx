import { connect } from 'react-redux';
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
    todoList: state.TodoList,
    length : state.TodoList.length
})

export default connect(mapStateToProps)(TodoList)