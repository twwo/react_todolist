import { connect } from "react-redux";
import TodoForm from "../components/TodoForm";

const mapStateToProps = (state) => ({
  todoList: state.TodoList,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (id, content) => {
    dispatch({ type: "ADD_TODO", id, content });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
