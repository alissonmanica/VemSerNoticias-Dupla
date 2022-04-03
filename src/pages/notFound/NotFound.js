import React from 'react'
import './NotFound.css'
import gifNotFound from '../../img/jungle-404.gif'

import { useNavigate } from 'react-router-dom'
function NotFound() {
  const navigate = useNavigate()

  return (
    <div className={'notFound'}>
      <h1>404</h1>
      <img src={gifNotFound} alt="page-not-found" />
      <h2>Page Not Found!</h2>
      <button onClick={() => navigate('/nyttop')}>Return to Home</button>
    </div>
  )
}

export default NotFound