import React from 'react';
import classes from './Title.module.css';

const Title = () => {
    const content = {
        name: 'Brayden Neale',
        role: 'Consultant, Developer',
        location: 'Melbourne, Australia'
    };

    return (
        <div className={classes.title}>
            <h1>{content.name}</h1>
            <h2>{content.role}</h2>
            <h2>{content.location}</h2>
        </div>
    )
}

export default Title;