import React from 'react';
import { BADGE_DATA } from '../store/badges';
import BadgeImage from './BadgeImage';

const Badges = () => {
    const badgeImages = BADGE_DATA.map(
        badge => <BadgeImage key={badge.id} title={badge.title} icon={badge.icon} />
    )

    return (
        <ul className='badges-list'>
            {badgeImages}
        </ul>
    );
};

export default Badges;