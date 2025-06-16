import React, { useState } from 'react';
import './Demo.css'

const demoStyle = {
    color: 'blue'
}

const Demo = ({ name = 'N/A', job }) => { // We set N/A as default value
    console.log(job);
    const [visited, setVisited] = useState(true)
    // console.log(props); // it holds all the props as key
    // {name: 'Lipon', job: 'Developer'}

    return (
        <div className={`${visited && 'container'}`}>
            Hello there, this is Demo
            <p style={demoStyle}>Hello there this is blue</p>
            {/* or */}
            <p style={{ color: visited ? 'blue' : 'green' }}>Hello there this is blue</p>
        </div>
    );
};

export default Demo;
