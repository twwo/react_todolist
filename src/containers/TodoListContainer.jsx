import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => ({
  todoList: state.TodoList,
});

const mapDispatchToProps = (dispatch) => ({
  updateTodoList: (todoList) => {
    dispatch({type: "UPDATE_TODO_LIST", todoList})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
