import React, { useEffect, useState } from 'react';

const Counter = () => {
    // const [current state, state changing function] = useState(initial function)
    const [count, setCount] = useState(0);
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        const nextSteps = steps + 1
        setSteps(nextSteps)
        console.log(steps); // give the one state previous value
    }
    console.log(steps); // give the right value

    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);

    useEffect(() => { console.log(steps) }, [steps])


    return (
        <div>
            <h3>Counter: {count}</h3>
            <h3>Steps: {steps}</h3>
            <button onClick={increaseSteps}>Increase Steps</button>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    );
};

export default Counter;