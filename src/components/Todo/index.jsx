import React from 'react'

export default class Todo extends React.Component{

    render(){
        return (
            <span>{this.props.value}</span>
        )
    }
}
