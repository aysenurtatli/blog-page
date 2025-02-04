import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h2>Sorry</h2>
        <p>That page cannot be found</p>
        <Link to="/" className='homepage-link'>Back to the Homepage...</Link>
    </div>
  )
}

export default NotFound