import React, { useEffect, useState } from 'react'
import makeRequest from '../makeRequest.ts'
import InputBox from '../components/inputBox.tsx'
import '../css/login.scss'
import logo from '../assets/images/logo.svg'
import SignInButton from '../components/signInButton.tsx'
import {
  GithubStyle,
  GoogleStyle,
  inputBoxStyle,
  LoginStyle,
} from '../constans.ts'
import { useNavigate } from 'react-router-dom'
import view from '../assets/images/view.svg'
import hide from '../assets/images/view_off.svg'
import LoginDog from '../components/loginDog.tsx'

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()
  const [unauthorizedError, setunauthorizedError] = useState<boolean>(false)
  const [rememberMe, setRememberMe] = useState(false)

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const emailValue = e.target.value
    setEmail(emailValue) // Always update the email state
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const showPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const rememberMeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked)
  }
  const loginHandler = async () => {
    try {
      const response = await makeRequest('POST', '/login', { email, password })

      // console.log(response);
      if (response.status === 200) {
        const tokens = {
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }
        if (rememberMe) {
          localStorage.setItem('tokens', JSON.stringify(tokens))
        } else {
          sessionStorage.setItem('tokens', JSON.stringify(tokens)) // if not click remember me, use session storage
        }
        navigate('/home')
      }
    } catch (e) {
      const errorObj = e as { response?: { status?: number } }
      if (errorObj.response?.status === 401) {
        setunauthorizedError(true)
        console.log('email or password is incorrect, please try again')
      } else {
        console.log('error')
      }
    }
  }

  const verifyTokenAndLogin = async () => {
    const tokensFromLocal = localStorage.getItem('tokens');
    const tokensFromSession = sessionStorage.getItem('tokens');

    const tokens = tokensFromLocal
        ? JSON.parse(tokensFromLocal)
        : tokensFromSession
            ? JSON.parse(tokensFromSession)
            : null;

    if (tokens) {
      try {

        const headers = {
          Authorization: `Bearer ${tokens.accessToken}`
        };

        const response = await makeRequest('POST', '/verifyToken', null, headers);

        if (response.status === 200) {
          navigate('/home');
        } else {
          localStorage.removeItem('tokens');
          sessionStorage.removeItem('tokens');
        }
      } catch (error) {
        console.log('Token verification failed', error);
        // localStorage.removeItem('tokens');
        sessionStorage.removeItem('tokens');
      }
    }
  }

  //to do /verifyToken endpoint
  useEffect(() => {verifyTokenAndLogin();
  }, [navigate]);


  return (
    <div className={'login_wrapper'}>
      <div className={'login_with_thirdParty'}>
        <div className={'logo_and_company'}>
          <img src={logo} alt="logo" style={{ width: '2.5rem' }} />
          <span>
            SHARE <span style={{ color: 'red' }}>LOVE</span> WITH PETS
          </span>
        </div>
        <div className={'signin_container'}>
          <SignInButton
            text={'Signin with Google'}
            onClick={() => {}}
            customStyle={GoogleStyle}
          />
          <SignInButton
            text={'Signin with Github'}
            onClick={() => {}}
            customStyle={GithubStyle}
          />
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
                <img src={hide} alt="hide" />
              ) : (
                <img src={view} alt="view" />
              )}
            </button>
          </div>
        </div>

        <div className={'login_options'}>
          <div className={'remember_me_checkbox'}>
            <label className="remember_me_label">
              <input type="checkbox" onChange={rememberMeHandler} />
              <span style={{ marginLeft: '0.2rem', fontSize: '0.8rem' }}>
                Remember me
              </span>
            </label>
          </div>
          <button
            className={'forgot_password_button'}
            style={{ fontSize: '0.8rem' }}>
            Forgot password?
          </button>
        </div>

        <SignInButton
          text={'Login with email'}
          onClick={loginHandler}
          customStyle={LoginStyle}
        />
        {unauthorizedError ? (
          <span
            className={'unauthorized_error'}
            style={{ color: 'red', font: 'bold', marginTop: '0.5rem' }}>
            email or password is incorrect, please try again !
          </span>
        ) : null}
      </div>
      <div className="login_animate">
        <LoginDog />
      </div>
    </div>
  )
}

export default Login
