import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import NavBar from '../navigation/navigation-container'

function Login () {
  const [usernameCreation, setUsernameCreation] = useState('')
  const [passwordCreation, setPasswordCreation] = useState('')

  const [usernameLogin, setUsernameLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const [loginStatus, setLoginStatus] = useState('')

  const [cookie, setCookie] = useState('')

  let navigate = useNavigate()

  axios.defaults.withCredentials = true

  function register () {
    axios
      .post(
        'https://bottega-capstone-project-kimma-d587bac5eeb7.herokuapp.com/api/register',
        {
          username: usernameCreation,
          password: passwordCreation
        }
      )
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    setPasswordCreation('')
    setUsernameCreation('')
  }

  function login () {
    axios
      .post(
        'https://bottega-capstone-project-kimma-d587bac5eeb7.herokuapp.com/api/login',
        {
          username: usernameLogin,
          password: passwordLogin
        }
      )
      .then(response => {
        setLoginStatus(response.data.message)
      })
      .catch(error => {
        console.log(error)
      })

    setPasswordLogin('')
    setUsernameLogin('')
  }

  useEffect(() => {
    if (loginStatus === 'Login successful') {
      // console.log('login successful')
      document.cookie = 'username=John Doe'
      return navigate('/')
    }
  }, [loginStatus, navigate])

  return (
    <>
      <div className='login-page'>
        <NavBar />

        <div className='login-wrapper'>
          <div className='left-side'>
            <h1>Register</h1>
            <label>Username </label>
            <input
              type='text'
              placeholder='Enter Username'
              onChange={e => {
                setUsernameCreation(e.target.value)
              }}
              value={usernameCreation}
            />
            <label>Password </label>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={e => {
                setPasswordCreation(e.target.value)
              }}
              value={passwordCreation}
            />
            <button onClick={register}>Register</button>

            <h1>Login</h1>
            <label>Username </label>
            <input
              type='text'
              placeholder='Enter Username'
              onChange={e => {
                setUsernameLogin(e.target.value)
              }}
              value={usernameLogin}
            />
            <label>Password </label>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={e => {
                setPasswordLogin(e.target.value)
              }}
              value={passwordLogin}
            />
            <button onClick={login}>Login</button>

            <h1>{loginStatus}</h1>
          </div>
          <div className='right-side'></div>
        </div>
      </div>
    </>
  )
}

export default Login
