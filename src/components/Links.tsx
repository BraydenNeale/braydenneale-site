import React from 'react';
import {LINK_DATA} from '../store/links';
import LinkCard from './LinkCard';
import classes from './Links.module.css';

const Links = () => {
    const linkCards = LINK_DATA.map(
        link => <LinkCard key={link.id} title={link.title} url={link.url} />
    );

    return (
        <ul className={classes['links-list']}>
            {linkCards}
        </ul>
    );
};

export default Links;