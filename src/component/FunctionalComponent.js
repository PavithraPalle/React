import React from 'react';
import "./myStyles.css";

const FunctionalComponent = (props) => {
    console.log(props);
    let inline = {
        color: 'Red',
        fontSize: '20px'
    }

    let a = props.apply ? 'heading' : '';
    return (
        <div>
            <h1 style={inline} className={`${a}, font-style`}>Welcome to React {props.city} {props.state}</h1>

        </div>
    )
}

export default FunctionalComponent;