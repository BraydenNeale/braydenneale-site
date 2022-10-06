import React from "react";
import classes from './Badges.module.css';

interface BageImageProps {
    icon: string,
    title: string,
}

const BadgeImage: React.FC<BageImageProps> = (props) => {
    return (
        <li className={classes['badge']}>
            <img src={props.icon} alt={props.title} />
        </li>
    );
};

export default BadgeImage;