import { createSlice } from '@reduxjs/toolkit'
import { notification } from 'antd'
import { apiClient } from '../../api/apiClient'

// Slice
const Sign = createSlice({
  name: 'sign',
  initialState: {
    isSignInLoading : false,
    isSendEmailLoading: false,
    isSignIn: false,
  },
  reducers: {
    SignInRequest: (state) => {
      state.isSignInLoading = true
    },
    SignInSuccess: (state) => {
      state.isSignInLoading = false
      state.isSignIn = true
    },
    SignInFailure: (state) => {
      state.isSignInLoading = false
    },
    SendMailRequest: (state) => {
      state.isSendEmailLoading = true
    },
    SendMailSuccess: (state) => {
      state.isSendEmailLoading = false
    },
    SendMailFailure: (state) => {
      state.isSendEmailLoading = false
    }
  },
});

// Actions
const { SignInRequest, SignInSuccess, SignInFailure, SendMailRequest, SendMailSuccess, SendMailFailure } = Sign.actions

// once user siginin..
export const signInUser = ({ email, password }) => async dispatch => {

  //validation email and password
  if (!validEmail(email)){
    return notification.error({
      duration: 2,
      description: 'Please enter the email address correctly!'
    })
  }
    
  if (!validPassword(password)){
    return notification.error({
      duration: 2,
      description: 'Please enter the email password correctly!'
    })
  }    

  try {
    dispatch(SignInRequest())
    apiClient.login(email, password)
      .then((response)=>{
        if (response.auth) {
          dispatch(SignInSuccess())
          notification.error({
            duration: 2,
            description: 'login successfully!'
          })
        } else {
          dispatch(SignInFailure())
          if(response.message === 'auth/wrong-password') {
            notification.error({
              duration: 2,
              description: 'Please check the Password!'
            })
          }

          if(response.message === 'auth/user-not-found') {
            notification.error({
              duration: 2,
              description: 'Please check the Email!'
            })
          }

          if (response.message === 'auth/too-many-requests') {
            notification.error({
              duration: 2,
              description: 'too many requests!'
            })
          }
        }
      })
  } catch (e) {
    console.error(e.message)
    dispatch(SignInFailure())
  }
}

// once user send email for password reset..
export const sendEmailforResetPw = (email) => async dispatch => {

  // validation email
  if (!validEmail(email)){
    return notification.error({
      duration: 2,
      description: 'Please enter the email correctly!!'
    })
  }

  try {
    dispatch(SendMailRequest())
    apiClient.resetPw(email)
      .then((response)=>{
        if (response.sent) {
          notification.success({
            duration: 2,
            description: 'Email sent successfully!'
          })
          dispatch(SendMailSuccess())
        } else {
          dispatch(SendMailFailure())
          notification.error({
            duration: 2,
            description: 'Please check the Email!'
          })
        }
      })
  } catch (e) {
    console.error(e.message);
    dispatch(SendMailFailure())
  }
}

// once isSendEamil initiall.. 
export const initialIsSendEmail = () => async dispatch => {

  try {
    dispatch(InitialIsSendEmailState())
  } catch (e) {
    console.error(e.message);
  }
}

const validEmail = (email) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if (!email.match(mailformat)) return false
  if (email.length === 0) return false
  return true
}

const validPassword = (pw) => {
  if (pw.length === 0) return false
  return true
}

export default Sign.reducer