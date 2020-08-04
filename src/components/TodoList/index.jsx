import Todo from '../Todo'
import React from 'react'

class TodoList extends React.Component{

    render(){
        return(
            new Array(this.props.todoList.length).map((todo,index) => {
                <Todo value={todo} key={index} />
            })
        )
    }
}