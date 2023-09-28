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

const LoginStyle={
backgroundColor:"#4f77ff",
    color:'#fff',
    width:"100%",
    borderRadius:"0.2rem",
    padding:"0.8rem 0",
    boxShadow:"0 0.2rem 0.5rem rgba(0,0,0,0.2)",
    fontSize:"1.2rem",
    cursor:"pointer",
    border:"none",
}

const inputBoxStyle={
    width:"100%",
    height:"2.5rem",
    borderRadius:"0.2rem",
    border: "solid 1px rgba(128, 128, 128, 0.7)",
    boxShadow: "0 0.2rem 0.4rem rgba(0,0,0,0.3)",
    color:"black",
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
                <div className={'login_title'}>
                    <span>Login to your account</span>
                </div>

                <div className={'sign_up_container'}>
                    <span>Don't have an account?</span>
                    <button>Sign Up Free !</button>
                </div>

                <div className={'inputBox_container'}>
                    <InputBox className={'email_login'} placeholder={'Email'} customStyle={inputBoxStyle} />
                    <InputBox className={'password'} placeholder={'Password'} customStyle={inputBoxStyle}/>
                </div>

                <div className={'login_options'}>
                        <div className={'remember_me_checkbox'}>
                                <input type="checkbox"/>
                                <span>Remember me</span>
                        </div>
                        <button className={'forgot_password_button'}>Forgot password?</button>
                </div>

              <SignInButton text={"Login with email"} onClick={()=>{}} customStyle={LoginStyle} />
            </div>
        </div>
    );
};

export default Login;