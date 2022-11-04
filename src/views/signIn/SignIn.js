import React from 'react'
import { Link } from 'react-router-dom';

//images start
import loginIcon from '../../assets/images/login.png'
import passwordIcon from '../../assets/images/password.png'
import eyeIcon from '../../assets/images/eye.png'
import logoIcon from '../../assets/images/logo.png'
//images end

const SingIn = (props) =>  {

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

                        <form>
                            <div className="icons">
                                <label className="full-width">EMAIL ADDRESS</label>
                                <i><img src={loginIcon} alt="login"/></i>
                                <input type="email" placeholder="ENTER EMAIL..." required/>
                            </div>
                            <div className="icons">
                                <label className="full-width">PASSWORD</label>
                                <i><img src={passwordIcon} alt="password"/></i>
                                <input type="text" placeholder="ENTER PASSWORD..." required id="hide" />

                                <i className="show"><img src={eyeIcon} alt="eye"/></i>
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

export default SingIn
