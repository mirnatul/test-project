import React from 'react';

// recommended
const User = (props) => {
    const { name, job } = props.user
    // console.log(props.user);
    return (
        <div>
            {name}
        </div>
    );
};

export default User;