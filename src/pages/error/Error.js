import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Error.css'

function Error() {
    const navigate = useNavigate()

  return (
    <div className={'error'}>
        <h1>Error!</h1>
        <button onClick={() => navigate('/nyttop')}>Return to Home</button>
    </div>
  )
}

export default Error