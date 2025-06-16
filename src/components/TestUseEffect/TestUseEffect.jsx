import React, { useEffect, useState } from 'react';

const TestUseEffect = () => {

    const [user, setUser] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])  // [] here we place the dependencies
    return (
        <div>
            {user.length}
        </div>
    );
};

export default TestUseEffect;