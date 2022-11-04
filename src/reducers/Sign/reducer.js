import { createSlice } from '@reduxjs/toolkit'
import { apiClient } from '../../api/apiClient'

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

export const SignInUser = ({ email, password }) => async dispatch => {
  try {
    apiClient.login(email, password)
      .then((response)=>{
        if (response === 'signIn') {
          dispatch(SignInSuccess());
        } else {
          console.log(response)
        }
      })
  } catch (e) {
    return console.error(e.message);
  }
}

export default Sign.reducer