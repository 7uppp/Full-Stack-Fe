import '../css/signInButton.css';

interface SignInButtonProps {
    text: string;
    onClick: () => void;
    customStyle?: React.CSSProperties;
}
const SignInButton:React.FC<SignInButtonProps> = ({text,onClick, customStyle}) => {
    return (
        <button className={'signInButton'} onClick={onClick} style={customStyle}>
            <span className={'signInButton_text'}>{text}</span>
        </button>
    );
};


export default SignInButton;