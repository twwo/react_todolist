import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { updateTodoListAction } from "../actions/index"

const mapStateToProps = (state) => ({
  todoList: state.TodoList,
});

const mapDispatchToProps = (dispatch) => ({
  updateTodoList: (todoList) => {
    dispatch(updateTodoListAction(todoList))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
