const todoList = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return [...state, { id:action.id,content: action.content, done: false }];
    }

    case "DELETE_TODO": {
      let newState = state.filter((value, index) => {
        return index !== action.index;
      });
      return newState;
    }

    case "DONE_TODO": {
      let newState = [...state]
      newState[action.index].done=!newState[action.index].done
      return newState;
    }

    default:
      return state;
  }
};

export default todoList;
