import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodoAction } from "../actions/index"

const mapStateToProps = (state) => ({
  todoList: state.TodoList,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (id, content) => {
    dispatch(addTodoAction(id, content));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
