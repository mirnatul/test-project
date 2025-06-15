import React, { useState } from 'react';
import './Demo.css'

const demoStyle = {
    color: 'blue'
}

const Demo = () => {
    const [visited, setVisited] = useState(true)

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
