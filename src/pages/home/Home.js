import React, { useContext, useEffect } from 'react'
import { GetContext } from '../../context/GetContext'

function Home() {

  const {getNews} = useContext(GetContext)


  useEffect(() => {
    getNews('home')
  },[])

  return (
    <div>Home</div>
  )
}

export default Home