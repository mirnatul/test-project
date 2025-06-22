import React from 'react';

const ChildOne = ({ singleCountry, handleVisited }) => {
    if (!singleCountry) return <div>Loading...</div>;
    const { name } = singleCountry

    return (
        <div className=''>
            <div className='border-2 p-2 mb-2 bg-amber-200 flex justify-between'>
                <div>{name.common}</div>
                <button
                    onClick={() => handleVisited(singleCountry)}
                    className='bg-sky-400 hover:bg-sky-200 px-2 py-1 rounded-md'>Visited</button>
            </div>
        </div>
    );
};

export default ChildOne;