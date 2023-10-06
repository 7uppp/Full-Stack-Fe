import React from 'react';
import '../css/verticalNavBarItem.scss'

interface VerticalNavBarItemProps {
    image: string;
    text: string;
    onClick?: () => void;
}
const VerticalNavBarItem:React.FC<VerticalNavBarItemProps> = ({image,text,onClick}) => {
    return (
        <button className={"items_container"} onClick={onClick}>
                <img src={image} alt="icon" />
                <span>{text}</span>
        </button>
    );
};

export default VerticalNavBarItem;