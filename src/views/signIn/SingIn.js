import React from 'react'
import { Link } from 'react-router-dom';

const SingIn = (props) =>  {

  return (
    <div class="container-fluid sign-in" style={{padding: '0px'}}>
        <div class="row">
            <div class="col-sm-6 img">
                <img src="../img/logo.png" alt='logo'/>
            </div>
            <div class="col-sm-6 form">
                <div class="main">
                    <h2>SIGN IN</h2>
                    <p>Please enter your details to login to the VA admin board</p>

                    <div class="forms-app">

                        <form>
                            <div class="icons">
                                <label class="full-width">EMAIL ADDRESS</label>
                                <i><img src="../img/login.png" alt="login"/></i>
                                <input type="email" placeholder="ENTER EMAIL..." required/>
                            </div>
                            <div class="icons">
                                <label class="full-width">PASSWORD</label>
                                <i><img src="../img/password.png" alt="password"/></i>
                                <input type="text" placeholder="ENTER PASSWORD..." required id="hide" />

                                <i class="show"><img src="../img/eye.png" alt="eye"/></i>
                            </div>

                            <div class="icons">
                                <label class="full-width">GROUP</label>
                                <i><img src="../img/group.png" alt='group'/></i>
                                <select required>
                                    <option>GROUP A - NAME</option>
                                    <option>GROUP A - NAME</option>
                                    <option>GROUP A - NAME</option>
                                </select>
                            </div>
                            <p class="forgot-passowrd"><Link to='/'>FORGOT PASSWORD?</Link></p>
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
