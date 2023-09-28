import InputBox from "../components/inputBox.tsx";
import '../css/login.scss'
import logo from '../assets/images/logo.jpg'
import SignInButton from "../components/signInButton.tsx";


const GoogleStyle={
    backgroundColor:"#3b5998",
    width:"100%",
    color:"white",
    borderRadius:"0.3rem",
    padding:"0.5rem 0",
    cursor:"pointer",
    border:"none",
}

const GithubStyle={
    backgroundColor:"#00aced",
    width:"100%",
    color:"white",
    borderRadius:"0.3rem",
    padding:"0.5rem 0",
    cursor:"pointer",
    border:"none",
}
const Login = () => {
    return (
        <div className={'login_wrapper'}>
            <div className={'login_with_thirdParty'}>
                <div className={'logo_and_company'}>
                    <img src={logo} alt="logo" style={{width:'2.5rem'}}/>
                    <span>CHAT WITH WORLD</span>
                </div>
                <div className={'signin_container'}>
                    <SignInButton text={'Signin with Google'}  onClick={()=>{}} customStyle={GoogleStyle}/>
                    <SignInButton text={'Signin with Github'}  onClick={()=>{}} customStyle={GithubStyle}/>
                </div>
                <div className={'login_sentence'}>
                    <span>Login using social media to get quick access</span>
                </div>

            </div>
            <div className={'login_with_account'}>
                <div className={'inputBox_container'}>
                    <InputBox placeholder={'test'} />
                    <InputBox placeholder={'test'} />
                </div>
            </div>
        </div>
    );
};

export default Login;