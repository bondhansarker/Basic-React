import React from 'react';
import ReactDOM from 'react-dom';

function Portal() {
    return ReactDOM.createPortal(
        <div className="App">
            Portal
        </div>,
        document.getElementById("portal")
    )
}

export default Portal
