import React from 'react';
import Card from './UI/Card';
import classes from './Links.module.css';

interface LinkCardProps {
    title: string,
    url: string,
}

const LinkCard: React.FC<LinkCardProps> = (props) => {
    return (
        <li className={classes['link-card']}>
            <Card>
                <a href={props.url}>
                    <h3>{props.title}</h3>
                </a>
            </Card>
        </li>
    );
} 

export default LinkCard;