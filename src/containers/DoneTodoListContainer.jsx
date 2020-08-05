import { connect } from "react-redux";
import DoneTodoList from "../components/DoneTodoList";

const mapStateToProps = (state) => ({
  doneTodoList: state.TodoList.filter((value) => {
      return value.status;
  })
});

export default connect(mapStateToProps)(DoneTodoList);