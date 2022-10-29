import React from 'react';
import Card from './UI/Card';

interface LinkCardProps {
    title: string,
    url: string,
}

const LinkCard: React.FC<LinkCardProps> = ({ url, title }) => {
    return (
        <li className='link-card'>
            <Card>
                <h3 className='link-card__text'><a href={url}>{title}</a></h3>
            </Card>
        </li>
    );
}

export default LinkCard;