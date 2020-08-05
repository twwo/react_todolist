import axios from 'axios'

const host = "https://5e9ec500fb467500166c4658.mockapi.io/todos";

export const getTodoList = () => {
    return axios.get(host);
}

export const postTodo = (todo) => {
    return axios.post(host, todo);
}

export const deleteTodo = (id) => {
    return axios.delete(host + `/${id}`);
}

export const putTodo = (todo) => {
    return axios.put(host + `/${todo.id}`, todo);
}

