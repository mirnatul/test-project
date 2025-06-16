import React from 'react';

const Ehandler = () => {
    const func1 = () => alert('Hello John Doe')
    const func2 = (name) => alert(`Hello ${name}`)


    return (
        <div>
            <button onClick={func1}>First</button>
            <button onClick={() => func2('John')}>Second</button>
        </div>
    );
};

export default Ehandler;