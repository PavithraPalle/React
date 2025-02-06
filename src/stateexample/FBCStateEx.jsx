import React, { useState } from 'react';

const FBCStateEx = () => {
    const [value, setValue] = useState("MRU");
    let changeName = () => {
        setValue("Malla Reddy University");
    }
    return (
        <div>FBCStateEx
            <h1>{value}</h1>
            <button onClick={changeName}>Change state</button>
        </div>
    )
}

export default FBCStateEx