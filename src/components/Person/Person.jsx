import React from 'react';

const Person = (props) => {
    const { name = 'N/A', job } = props.person
    console.log(job);
    // console.log(props);
    // {person: {name: 'Lipon', job: 'Developer'}}

    return (
        <div>
            This is person
        </div>
    );
};

export default Person;