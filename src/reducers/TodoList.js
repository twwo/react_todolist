const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [
        ...state,
        { id: action.id, content: action.content, status: false },
      ];
    }

    case "DELETE_TODO": {
      let newState = state.filter((value) => {
        return value.id !== action.id;
      });
      return newState;
    }

    case "DONE_TODO": {
      let newState = [...state];
      newState.map((value) => {
        if (value.id === action.id) {
          value.status = !value.status
        } 
      })
      return newState;
    }

    case "UPDATE_TODO_LIST": {
      return action.todoList;
    }

    default:
      return state;
  }
};

export default todoList;
