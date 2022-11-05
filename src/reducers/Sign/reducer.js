import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify';

// Slice
const Sign = createSlice({
  name: 'sign',
  initialState: {
    isSingIn: false,
  },
  reducers: {
    SignInSuccess: (state) => {
      state.isSingIn = true;
    },
  },
});

// Actions
const { SignInSuccess } = Sign.actions

export const signInUser = ({ email, password }) => async dispatch => {
  //validation email and password
  if (!validEmail(email)) return toast.error('Please enter the email correctly!')
  if (!validPassword(password)) return toast.error('Please enter the password correctly!')

  try {
    apiClient.login(email, password)
      .then((response)=>{
        if (response === 'signIn') {
          dispatch(SignInSuccess())
        } else {
          if(response === 'auth/wrong-password') toast.error('Please check the Password')
          if(response === 'auth/user-not-found') toast.error('Please check the Email')
        }
      })
  } catch (e) {
    return console.error(e.message);
  }
}

export const sendEmailforResetPw = (email) => async dispatch => {
  // validation email
  if (!validEmail(email)) return toast.error('Please enter the email correctly!')

  try {
    apiClient.resetPw(email)
      .then((response)=>{
        if (response === 'sent') {
          toast.success('Email sent successfully!')
        } else {
          toast.error('Please check the Email!')
        }
      })
  } catch (e) {
    return console.error(e.message);
  }
}

const validEmail = (email) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailformat)) return false
  if (email.length === 0) return false
  return true
}

const validPassword = (pw) => {
  if (pw.length === 0) return false
  return true
}

export default Sign.reducer