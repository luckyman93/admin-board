import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { SignInUser } from '../../reducers/Sign/reducer'

//images start
import loginIcon from '../../assets/images/login.png'
import passwordIcon from '../../assets/images/password.png'
import eyeIcon from '../../assets/images/eye.png'
import logoIcon from '../../assets/images/logo.png'
//images end

const SignIn = () =>  {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { isSingIn } = useSelector(state => state.Sign)
    const dispatch = useDispatch()

    const onSignInEmailAndPw = (e) => {
        e.preventDefault();
        const credentials = {
            email: email,
            password: password,
        }
        dispatch(SignInUser(credentials))
    }

    const onViewPassWord = () => {
        let dataShow = document.getElementById('hide').getAttribute('type')
        dataShow === 'text' 
            ? document.getElementById('hide').setAttribute('type', 'password')
            : document.getElementById('hide').setAttribute('type', 'text')
    }

    let authToken = sessionStorage.getItem('Auth Token')
    if (authToken) return <Navigate to="/createmachine"/>

    return (
        <div className="container-fluid sign-in" style={{padding: '0px'}}>
            <div className="row">
                <div className="col-sm-6 img">
                    <img src={logoIcon} alt='logo'/>
                </div>
                <div className="col-sm-6 form">
                    <div className="main">
                        <h2>SIGN IN</h2>
                        <p>Please enter your details to login to the VA admin board</p>
                        <div className="forms-app">
                            <form onSubmit={(e) => onSignInEmailAndPw(e)}>
                                <div className="icons">
                                    <label className="full-width">EMAIL ADDRESS</label>
                                    <i><img src={loginIcon} alt="login"/></i>
                                    <input
                                        type="email"
                                        placeholder="ENTER EMAIL..."
                                        onChange={(e) => setEmail(e.target.value)}
                                        required/>
                                </div>
                                <div className="icons">
                                    <label className="full-width">PASSWORD</label>
                                    <i><img src={passwordIcon} alt="password"/></i>
                                    <input
                                        type="password"
                                        placeholder="ENTER PASSWORD..."
                                        onChange={(e) => setPassword(e.target.value)}
                                        required id="hide" />

                                    <i className="show" onClick={onViewPassWord}><img src={eyeIcon} alt="eye"/></i>
                                </div>
                                <p className="forgot-passowrd"><Link to='/'>FORGOT PASSWORD?</Link></p>
                                <button type="submit">SIGN IN</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn