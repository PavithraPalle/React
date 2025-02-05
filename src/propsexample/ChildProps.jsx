import React from 'react'

const ChildProps = (props) => {
    return (
        <div>
            <h1>This is a child props</h1>
            {props.name}
        </div>
    )
}

export default ChildProps