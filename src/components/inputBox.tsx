import React from "react";
import '../css/inputBox.scss'

interface InputBoxProps {
    placeholder?: string;
    customStyle?: React.CSSProperties;
    setInputValue?: string
}

const InputBox: React.FC<InputBoxProps> = ({placeholder, customStyle, setInputValue}) => {
    return (
        <div className={'inputBox_wrapper'}>
            <input className={'inputBox'} value={setInputValue} placeholder={placeholder} style={customStyle}/>
        </div>
    );
};

export default InputBox;