import React from 'react';

let JSX = (props) =>{
    return(
        React.createElement(
            "div",
            {id:"check",className:"klass"},
            React.createElement(
                "h1",
                null,
                `Hello ${props.compType}`
            )
        )
    )

} 

export default JSX;
