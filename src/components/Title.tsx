import React from 'react';

const content = {
    name: 'Brayden Neale',
    role: 'Consultant, Developer',
    location: 'Melbourne, Australia'
};

const Title = () => {
    return (
        <div className='title'>
            <h1>{content.name}</h1>
            <h2>{content.role}</h2>
            <h2>{content.location}</h2>
        </div>
    )
}

export default Title;