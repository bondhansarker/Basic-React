import React from 'react';

let Functional = (props) =>{
    return(
        <div>
             {props.children}
            <h1> {props.compType} Component </h1>
        </div>
    )
}

export default Functional;
