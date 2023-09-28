import InputBox from "../components/inputBox.tsx";
import '../css/login.scss'
import logo from '../assets/images/logo.jpg'
import SignInButton from "../components/signInButton.tsx";
import {GithubStyle, GoogleStyle, inputBoxStyle, LoginStyle} from "../constans.ts";




const Login = () => {
    return (
        <div className={'login_wrapper'}>
            <div className={'login_with_thirdParty'}>
                <div className={'logo_and_company'}>
                    <img src={logo} alt="logo" style={{width:'2.5rem'}}/>
                    <span>SHARE WITH THE WORLD</span>
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