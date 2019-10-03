import React from 'react';
import '../App.css';

const box = (props) => {
    return (
        <div id = 'main'>
        {props.children}
        </div>
    )
    }

export default box;