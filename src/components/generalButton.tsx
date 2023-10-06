import React from 'react';
import '../css/generalButton.scss'

interface GeneralButtonProps {
    customStyle?: React.CSSProperties;
    text: string;
    onClick: () => void;
}
const GeneralButton:React.FC<GeneralButtonProps> = ({customStyle,text,onClick}) => {

    return (
        <button className={'button_container'} onClick={onClick} style={customStyle}>
            <span>{text}</span>
        </button>
    );
};

export default GeneralButton;