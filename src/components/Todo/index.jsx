import React from 'react'

export default class Todo extends React.Component{

    deleteTodo = (index) =>{
        this.props.deleteTodo(index)
    }

    render(){
        return (
        <div><span>{this.props.index},{this.props.value.value}</span><button onClick={this.deleteTodo(this.props.index)}>X</button></div>
        )
    }
}
