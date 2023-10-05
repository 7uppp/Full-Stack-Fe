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
import LoginDog from '../components/loginDog.tsx'
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

    const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        const emailValue = e.target.value
        setEmail(emailValue) // Always update the email state
    };

    const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPassword(e.target.value)
    };

    const userNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setUserName(e.target.value)
    };

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    };
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
                        placeholder={'Username'}
                        customStyle={inputBoxStyle}
                        value={username}
                        onChange={userNameHandler}
                    />
                </div>

                <SignInButton
                    text={'Register'}
                    onClick={registerHandler}
                    customStyle={LoginStyle}
                />
            </div>
            <div className="login_animate">
                <LoginDog/>
            </div>
            <Modal isOpen={modalIsOpen}>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                    <div  style={{display:'flex',flexDirection:'column',justifyContent:'space-between',alignItems:"center"}}>
                        <h2>
                            {isRegisterSuccess
                                ? <>
                                    <span>Register success! Welcome to PET SHARE</span>
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
