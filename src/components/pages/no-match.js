import React from 'react'
import { Link } from 'react-router-dom'

import NavBar from '../navigation/navigation-container'

function NoMatch () {
  return (
    <>
      <NavBar />
      <h2>We couldn't find that page</h2>
      <Link to='/'>Return To Homepage</Link>
    </>
  )
}

export default NoMatch
