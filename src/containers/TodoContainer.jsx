import { connect } from "react-redux";
import Todo from "../components/Todo";

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (id) => {
    dispatch({ type: "DELETE_TODO", id });
  },
  doneTodo: (id) => {
    dispatch({ type: "DONE_TODO", id });
  },
});

export default connect(null, mapDispatchToProps)(Todo);
