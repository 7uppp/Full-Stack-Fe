import React, { useState} from 'react'
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
import Modal from '../components/modal.tsx'
import ConfettiEffect from "../components/confettiEffect.tsx";
import registerFailed from '../assets/images/registerFailed.png'


const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [username, setUserName] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [modalContent, setModalContent] = useState<string>('');
    const [isRegisterSuccess, setIsRegisterSuccess] = useState<boolean>(false)
    const [modalIsOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [usernameError, setUsernameError] = useState<string | null>(null);

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const emailValue = e.target.value
        setEmail(emailValue);
        setEmailError(emailValidation(emailValue));

    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const passwordValue = e.target.value;
        setPassword(passwordValue);
        setPasswordError(passwordValidation(passwordValue));
    };

    const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const usernameValue = e.target.value;
        setUserName(usernameValue);
        setUsernameError(userNameValidation(usernameValue))
    };

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    };


    const emailValidation = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? null : 'Email is not valid';
    };

    const passwordValidation = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
        return passwordRegex.test(password) ? null : 'Password need 8-16 characters, at least one upper & lowercase & a number'
    }

    const userNameValidation = (username: string) => {
        const usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        return usernameRegex.test(username) ? null : '3-20 characters, only letters and numbers';
    }

    const registerHandler = async () => {
        try {
            const response = await makeRequest('POST', '/register', {email, password,username})
            // console.log(response);
            if (response.status === 200) {
                setIsRegisterSuccess(true)
                setModalContent(' You will be redirect to login page in 3s ......');
                setIsOpen(true);
                setTimeout(() => {
                    setIsOpen(false);
                    navigate('/login');
                }, 3000);
            }
        } catch (e) {
            setIsRegisterSuccess(false);
            setIsOpen(true);
            console.log(e)
        }
    };




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
                        className={'email'}
                        placeholder={'Email'}
                        customStyle={inputBoxStyle}
                        value={email}
                        onChange={emailHandler}
                    />
                    {emailError && <span style={{ color: "red",fontSize:'0.3rem' }}>{emailError}</span>}
                    <div className={'password_field'}>
                        <div style={{display:'flex',flexDirection:'column',width:'100%'}}>
                            <InputBox
                                type={showPassword ? 'text' : 'password'}
                                className={'password'}
                                placeholder={'Password'}
                                customStyle={inputBoxStyle}
                                value={password}
                                onChange={passwordHandler}
                            />
                            {passwordError && <span style={{ color: "red" ,fontSize:'0.3rem'}}>{passwordError}</span>}
                        </div>

                        <button
                            className={'password_display_button'}
                            style={passwordError ? {display: "none"} : {}}
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
                        placeholder={'Username'}
                        customStyle={inputBoxStyle}
                        value={username}
                        onChange={userNameHandler}
                    />
                    {usernameError && <span style={{ color: "red",fontSize:'0.3rem',marginBottom:'1rem' }}>{usernameError}</span>}
                </div>


                {
                    !emailError && !passwordError && !usernameError ?
                        <SignInButton
                            text={'Register'}
                            onClick={registerHandler}
                            customStyle={LoginStyle}
                        />
                        : null
                }
            </div>


            <Modal isOpen={modalIsOpen}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                    <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:"center"}}>
                        <h2>
                            {isRegisterSuccess
                                ? <>
                                    <span>Register success! Welcome to PawMingle </span>
                                    <ConfettiEffect />
                                </>
                                : <span style={{marginTop:'3rem'}}>Register Failed! Please try again.</span>
                            }
                        </h2>
                        <span>{modalContent}</span>
                    </div>

                    {!isRegisterSuccess && <>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                            <img style={{width:'6rem'}} src={registerFailed} alt="registerFailed"/>
                            <button style={{marginLeft:'1rem'}} onClick={() => setIsOpen(false)}>Close</button>
                        </div>

                    </>}
                </div>

            </Modal>

        </div>
    )
}

export default Login
