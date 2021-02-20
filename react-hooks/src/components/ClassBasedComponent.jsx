import React, { Component } from 'react'

export default class ClassBasedComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Nasim Kabir"
        }
        this.handleNameChange=this.handleNameChange.bind(this)
    }
    handleNameChange=()=>{
        this.setState({name:"Md. Nasim Kabir"})
    }
    render() {
        return (
            <div>
                <h1 >Name is : {this.state.name}</h1>
                <button onClick={this.handleNameChange}>Change</button>
            </div>
        )
    }
}
