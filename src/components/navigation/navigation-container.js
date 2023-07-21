import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/images/navigation/logo.png'
import axios from 'axios'

function NavBar (props) {
  function handleSignOut () {
    axios
      .delete(
        'https://bottega-capstone-project-kimma-d587bac5eeb7.herokuapp.com/api/session',
        { withCredentials: true }
      )
      .then(response => {
        if (response.status === 200) {
          console.log(`You are loggedin: ${props.loggedIn}`)
        }
        return response.data
      })
      .catch(error => {
        console.log(`Error signing out ${error}`)
      })
  }
  return (
    <div className='nav-wrapper'>
      <div className='left-side'>
        <Link to='/'>
          <img src={logo} alt='Logo' />
        </Link>
      </div>
      <div className='right-side'>
        <div className='nav-link-wrapper'>
          {props.loggedIn ? (
            <a href='/' onClick={handleSignOut}>
              Sign Out
            </a>
          ) : (
            <Link to='/login'>Login</Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavBar
