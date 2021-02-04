import React, { Component } from 'react'

import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
    
    constructor() {
        super()
    
        this.state = {
             parent: "Parent is called"
        }
    }

    funCall = (hacker) =>{
        this.setState({
            parent: `Parent hacked by ${hacker}`
        })
    }

    render()
    {    
        return (
            <div>
                <ChildComponent sentence={this.state.parent} 
                                funcParam={this.funCall} />
            </div>
        )
   }
}

export default ParentComponent
