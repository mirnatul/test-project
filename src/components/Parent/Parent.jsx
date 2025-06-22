import React, { useEffect, useState } from 'react';
import ChildOne from '../Childs/ChildOne/ChildOne';
import ChildTwo from '../Childs/ChildTwo/ChildTwo';

const Parent = () => {
    const [country, setCountry] = useState([])
    const [visited, setVisited] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/independent?status=true')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const handleVisited = country => {
        // console.log(country);
        const newVisited = [...visited, country];
        setVisited(newVisited);
        console.log("Clicked");
    }

    // console.log(country);
    return (
        <div className='border-4 p-4 bg-red-200'>
            <div className='mb-4 sticky top-0 bg-red-200'>
                <p>Total country: <b>{country.length}</b></p>
                <p>Visited: <b>{visited.length}</b></p>
            </div>
            <div className='grid grid-cols-3 gap-2'>
                {
                    country.map(singleCountry => <ChildOne
                        key={singleCountry?.cca2}
                        singleCountry={singleCountry}
                        handleVisited={handleVisited}
                    ></ChildOne>)
                }
            </div>
            <ChildOne></ChildOne>
            {/* <ChildTwo></ChildTwo> */}
        </div>
    );
};

export default Parent;