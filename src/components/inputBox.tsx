import React from "react";
import '../css/inputBox.scss'

interface InputBoxProps {
    placeholder?: string;
    customStyle?: React.CSSProperties;
    type?: string;
    value: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputBox: React.FC<InputBoxProps> = ({placeholder, customStyle, value,className,onChange,type}) => {
    return (
            <input className={`inputBox ${className ? className : ''}`} value={value} placeholder={placeholder} style={customStyle} onChange={onChange} type={type}/>
    );
};

export default InputBox;