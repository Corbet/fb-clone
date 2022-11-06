import { Button } from '@mui/material'
import React from 'react'
import "./Login.css"
import {auth, provider} from "./firebase"
import { actionTypes } from './reducer'
import { useStateValue } from './StateProvider'
import { signInWithPopup } from "firebase/auth"

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {

        console.log(result)

        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })

      }).catch(error => alert(error.message));
  }
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt=''
        />
        <img
          src='https://p.kindpng.com/picc/s/177-1773403_facebook-logo-words-png-transparent-png.png'
          alt=''
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  )
}

export default Login