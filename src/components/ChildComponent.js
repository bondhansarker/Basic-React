import React from 'react';

let ChildComponent = (props) =>{
    return(
        <div>
            <h1> {props.sentence}</h1>
            <button onClick={()=>props.funcParam("Child")}>Click</button>
        </div>
    )
}

export default ChildComponent;
