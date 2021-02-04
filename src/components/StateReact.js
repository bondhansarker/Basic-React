import React, { Component } from "react";



class StateReact extends Component {

    constructor() {
        super();
        this.state = {
            message: "Welcome to State change",
            cnt: 0
        }
        //this.changeState = this.changeState.bind(this);  
    }

    changeState=()=>{
        this.setState({
            message: "State is changing ",
            cnt: this.state.cnt + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1> {this.state.message} 
                     {this.state.cnt > 0 
                      ? `${this.state.cnt} times` 
                      : null}  
                </h1>
                <button onClick={this.changeState} >Click</button>
            </div>
        )
    }
}

export default StateReact;