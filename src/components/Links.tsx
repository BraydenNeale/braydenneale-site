import React from 'react';
import { LINK_DATA } from '../store/links';
import LinkCard from './LinkCard';

const linkCards = LINK_DATA.map(
    link => <LinkCard key={link.id} title={link.title} url={link.url} />
);

const Links = () => {
    return (
        <ul className='links-list'>
            {linkCards}
        </ul>
    );
};

export default Links;