import React from 'react';
import ReactDOM from 'react-dom';

function Tick() {
    const element = (
        <div className="clock">
            <h1>Hello, World!</h1>
            <h2>It is {new Date().toLocaleDateString()}</h2>
        </div>
    );
    // ReactDOM.render(
    //     element,
    //     document.getElementById('root')
    // );
    return element
}

export default Tick;