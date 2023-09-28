import React, {useState} from 'react';
import InputBox from "../components/inputBox.tsx";
import '../css/login.scss'
import logo from '../assets/images/logo.jpg'
import SignInButton from "../components/signInButton.tsx";
import {GithubStyle, GoogleStyle, inputBoxStyle, LoginStyle} from "../constans.ts";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import view from "../assets/images/view.svg";
import hide from "../assets/images/view_off.svg";

const Login:React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEmail(e.target.value);
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value);
    }

    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }
    const loginHandler = async() => {
        try {
            const response = await axios.post('http://localhost:8070/login', {
                email,
                password
            })
            if(response.status === 200){
                navigate('/home')
            }
            else{
                console.log('user or password wrong')
            }

        } catch (e) {
            console.log(e);
        }
    };
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
                    <InputBox type={'text'} className={'email_login'} placeholder={'Email'} customStyle={inputBoxStyle} value={email} onChange={emailHandler}/>
                    <div className={'password_field'}>
                        <InputBox type={ showPassword? 'text':'password'} className={'password'} placeholder={'Password'} customStyle={inputBoxStyle} value={password} onChange={passwordHandler}/>
                        <button className={'password_display_button'} onClick={showPasswordHandler}>{showPassword? <img src={hide} alt="hide"/> :
                            <img src={view} alt="view"/>}</button>
                    </div>
                </div>

                <div className={'login_options'}>
                        <div className={'remember_me_checkbox'}>
                                <input type="checkbox"/>
                                <span>Remember me</span>
                        </div>
                        <button className={'forgot_password_button'}>Forgot password?</button>
                </div>

              <SignInButton text={"Login with email"} onClick={loginHandler} customStyle={LoginStyle} />
            </div>
        </div>
    );
};

export default Login;