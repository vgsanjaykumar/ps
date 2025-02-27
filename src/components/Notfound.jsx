import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='text-center py-64'>
      <h1>404 | Not Found</h1>
      <Link to="/">Go To Home Page</Link>
    </div>
  )
}

export default Notfound
