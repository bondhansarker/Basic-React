import React, { Component } from 'react'

class Ref extends Component {
    constructor(props) {
        super(props)
        this.reff = React.createRef();
    }
    
    clickHander=()=>{
        this.reff.current.focus();
        console.log(this.reff);
    }
    render() {
        return (
            <div>
                <input  type="text" ref={this.reff}/>
                <button onClick={()=>this.clickHander()} > Click </button>
            </div>
        )
    }
}

export default Ref
