import React from 'react'
import loadingGif from '../../img/loading.gif'
import './Loading.css'

function Loading() {
  return (
    <div className={'loading'}>
        <img src={loadingGif} alt="loading" />
        <h1>Loading...</h1>
    </div>
  )
}

export default Loading