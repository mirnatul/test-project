import React from 'react';
import ChildOne from '../Childs/ChildOne/ChildOne';
import ChildTwo from '../Childs/ChildTwo/ChildTwo';

const Parent = () => {
    return (
        <div className='border-4 p-4 bg-red-200'>
            <div>
                Parent Container
            </div>
            <ChildOne></ChildOne>
            <ChildTwo></ChildTwo>
        </div>
    );
};

export default Parent;