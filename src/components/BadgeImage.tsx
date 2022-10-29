import React from "react";

interface BageImageProps {
    icon: string,
    title: string,
}

const BadgeImage: React.FC<BageImageProps> = ({icon, title}) => {
    return (
        <li className='badge'>
            <img src={icon} alt={title} />
        </li>
    );
};

export default BadgeImage;