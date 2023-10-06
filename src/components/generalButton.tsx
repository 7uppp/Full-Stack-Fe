import React from 'react';
import '../css/generalButton.scss'

interface GeneralButtonProps {
    customStyle?: React.CSSProperties;
    text: string;
    onClick: () => void;
    className?: string;
}
const GeneralButton:React.FC<GeneralButtonProps> = ({customStyle,text,onClick,className}) => {

    return (
        <button className={`button_container ${className}`} onClick={onClick} style={customStyle}>
            <span>{text}</span>
        </button>
    );
};

export default GeneralButton;