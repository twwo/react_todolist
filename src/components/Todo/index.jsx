import React from 'react'

export default class Todo extends React.Component{

    render(){
        return (
            console.log(this.props),
            <span>{this.props.value}</span>
        )
    }
}
