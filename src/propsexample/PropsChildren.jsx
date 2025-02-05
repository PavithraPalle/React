import React from 'react';

const PropsChildren = (props) => {
    console.log(props);

    return (
        <div>PropsChildren
            <hr />
            <h1>{props.username}</h1>
            <h1>{props.company}</h1>
            {
                props.children
            }
            
            {props.children[1]}
            
        </div>
    )
}

export default PropsChildren