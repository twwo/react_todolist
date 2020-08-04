import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => ({
  todoList: state.TodoList,
});

export default connect(mapStateToProps)(TodoList);
