import React, {useContext, useState} from 'react'
import makeRequest from '../makeRequest.ts'
import InputBox from '../components/inputBox.tsx'
import '../css/register.scss'
import logo from '../assets/images/logo.svg'
import SignInButton from '../components/signInButton.tsx'
import {
    inputBoxStyle,
    LoginStyle,
} from '../constants/cssConstans.ts'
import {useNavigate} from 'react-router-dom'
import view from '../assets/images/view.svg'
import hide from '../assets/images/view_off.svg'
import LoginDog from '../components/loginDog.tsx'
import {UserInfoContext} from "../context/userInfoContext.tsx";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [userName, setUserName] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const navigate = useNavigate()


    const {setIsLogin} = useContext(UserInfoContext)
    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const emailValue = e.target.value
        setEmail(emailValue) // Always update the email state
    }

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserName(e.target.value)
    }

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }
    const loginHandler = async () => {
        try {
            const response = await makeRequest('POST', '/register', {email, password})
            // console.log(response);
            if (response.status === 200) {
                setIsLogin(true)
            }
        } catch (e) {
            setIsLogin(false)
            console.log(e)
            const errorObj = e as { response?: { status?: number } }
            if (errorObj.response?.status === 401) {
                console.log('email or password is incorrect, please try again')
            } else {
                console.log(Error)
            }
        }
    }




    return (
        <div className={'register_wrapper'}>
            <div className={'register_content'}>
                <div className={'logo_and_slogan'}>
                    <img src={logo} alt="logo" style={{width: '2.5rem'}}/>
                    <span>SHARE <span style={{color: 'red'}}>LOVE</span> WITH PETS</span>
                    <p className={'welcome_contents'}>
                        <br/>We celebrate the lifelong bond between <br/>pets and humans. Share moments of joy <br/> and tales of love with our community.
                    </p>
                </div>
            </div>

            <div className={'register_account'}>
                <div className={'register_title'}>
                    <span> Register With Us</span>
                </div>

                <div className="subRegister_title">
                    <span>MEET &nbsp;SHARE &nbsp;LOVE &nbsp;</span>
                </div>
                <div className={'inputBox_container'}>
                    <InputBox
                        type={'text'}
                        className={'email_login'}
                        placeholder={'Email'}
                        customStyle={inputBoxStyle}
                        value={email}
                        onChange={emailHandler}
                    />
                    <div className={'password_field'}>
                        <InputBox
                            type={showPassword ? 'text' : 'password'}
                            className={'password'}
                            placeholder={'Password'}
                            customStyle={inputBoxStyle}
                            value={password}
                            onChange={passwordHandler}
                        />
                        <button
                            className={'password_display_button'}
                            onClick={showPasswordHandler}>
                            {showPassword ? (
                                <img src={hide} alt="hide"/>
                            ) : (
                                <img src={view} alt="view"/>
                            )}
                        </button>
                    </div>

                    <InputBox
                        type={'text'}
                        className={'userName'}
                        placeholder={'userName'}
                        customStyle={inputBoxStyle}
                        value={userName}
                        onChange={userNameHandler}
                    />
                </div>

                <SignInButton
                    text={'Register'}
                    onClick={loginHandler}
                    customStyle={LoginStyle}
                />
            </div>
            <div className="login_animate">
                <LoginDog/>
            </div>
        </div>
    )
}

export default Login
