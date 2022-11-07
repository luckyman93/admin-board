import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'
import { toast } from 'react-toastify';

// Slice
const CreateMachine = createSlice({
  name: 'sign',
  initialState: {
    isSingIn: false,
    isSendEmail: false,
  },
  reducers: {
    SignInSuccess: (state) => {
      state.isSingIn = true
    },
    SendEmailSuccess: (state) => {
      state.isSendEmail = true
    },
    InitialIsSendEmailState: (state) => {
      state.isSendEmail = false
    }
  },
});

// Actions
const { SignInSuccess, SendEmailSuccess, InitialIsSendEmailState } = CreateMachine.actions

// get group list..
export const getGroupList = () => async dispatch => {
  //validation email and password
  try {
    apiClient.login(email, password)
      .then((response)=>{
        if (response === 'signIn') {
          dispatch(SignInSuccess())
          toast.success('login successfully!')
        } else {
          if(response === 'auth/wrong-password') toast.error('Please check the Password')
          if(response === 'auth/user-not-found') toast.error('Please check the Email')
        }
      })
  } catch (e) {
    return console.error(e.message);
  }
}

export default CreateMachine.reducer