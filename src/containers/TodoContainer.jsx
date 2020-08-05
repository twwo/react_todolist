import { connect } from "react-redux";
import Todo from "../components/Todo";
import { deleteTodoAction, doneTodoAction } from "../actions/index"

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch(deleteTodoAction(id));
  },
  doneTodo: (id) => {
    dispatch(doneTodoAction(id));
  },
});

export default connect(null, mapDispatchToProps)(Todo);
