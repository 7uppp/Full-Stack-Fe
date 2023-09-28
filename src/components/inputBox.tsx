import React from "react";
import '../css/inputBox.scss'

interface InputBoxProps {
    placeholder?: string;
    customStyle?: React.CSSProperties;
    setInputValue?: string
    className?: string;
}

const InputBox: React.FC<InputBoxProps> = ({placeholder, customStyle, setInputValue,className}) => {
    return (
        <div className={'inputBox_wrapper'}>
            <input className={`inputBox ${className ? className : ''}`} value={setInputValue} placeholder={placeholder} style={customStyle}/>
        </div>
    );
};

export default InputBox;