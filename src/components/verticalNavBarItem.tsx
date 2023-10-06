import React from 'react';
import '../css/verticalNavBarItem.scss'

interface VerticalNavBarItemProps {
    image: string;
    text: string;
}
const VerticalNavBarItem:React.FC<VerticalNavBarItemProps> = ({image,text}) => {
    return (
        <button className={"items_container"}>
                <img src={image} alt="icon" />
                <span>{text}</span>
        </button>
    );
};

export default VerticalNavBarItem;