import React from 'react';
import './Demo.css'

const demoStyle = {
    color: 'blue'
}

const Demo = () => {
    return (
        <div className='container'>
            Hello there, this is Demo
            <p style={demoStyle}>Hello there this is blue</p>
            {/* or */}
            <p style={{ color: 'blue' }}>Hello there this is blue</p>
        </div>
    );
};

export default Demo;
