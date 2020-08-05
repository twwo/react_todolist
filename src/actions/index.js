export const updateTodoListAction = (todoList) => {
    return {
        type: "UPDATE_TODO_LIST",
        todoList
    }
} 

export const addTodoAction = (id, content) => {
    return {
        type: "ADD_TODO",
        id,
        content
    }
}

export const deleteTodoAction = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

export const doneTodoAction = (id) => {
    return {
        type: "DONE_TODO",
        id
    }
}