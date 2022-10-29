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
                <a href={url}>
                    <h3>{title}</h3>
                </a>
            </Card>
        </li>
    );
}

export default LinkCard;