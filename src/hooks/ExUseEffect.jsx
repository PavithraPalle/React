import React, { useEffect, useState } from 'react';

const ExUseEffect = () => {
    // const [count, setCount] = useState(0);
    // useEffect(() => {
    //     document.title = "MRU";
    //     setTimeout(() => {
    //         setCount(1000);
    //     }, 4000)
    // })

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json().then(data => {
                // console.log(data);

                setUsers(data);
            }))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>ExUseEffect
            {/* <h1>{count}</h1> */}
            {
                users.map((user, i) => {
                    return (
                        //! empty fragment
                        // <>
                        //     <h1>{user.name}</h1>
                        //     <h2>{user.email}</h2>
                        // </>

                        //! React.Fragment
                        <React.Fragment key={i}>
                            <h1>{user.name}</h1>
                            <h2>{user.email}</h2>
                        </React.Fragment>
                    )
                })
            }
        </div>
    )
}

export default ExUseEffect