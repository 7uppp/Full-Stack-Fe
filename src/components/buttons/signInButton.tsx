import '../../css/signInButton.css';

interface SignInButtonProps {
    text: string;
    onClick: () => void;
    customStyle?: React.CSSProperties;
    className?: string;
}
const SignInButton:React.FC<SignInButtonProps> = ({text,onClick, customStyle,className}) => {
    return (
        <button className={`signInButton ${className ? className:''} `} onClick={onClick} style={customStyle}>
            <span className={'signInButton_text'}
            >{text}</span>
        </button>
    );
};


export default SignInButton;