import React, { useContext, useEffect } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import { GetContext } from '../../context/GetContext'
import placeholder from "../../img/placeholder.jpg"

function Home() {
  const {getNews, news} = useContext(GetContext)
  const navigate = useNavigate()

  useEffect(() => {
    getNews('home')
    
  }, [])

  return (
    <div> 
      {news.map((e) =>(
      <div key={e.published_date} onClick={() => navigate(`/details/${e.published_date}`)}>
      <h3>{e.title}</h3>
      {e.multimedia !== null ? 
      <img src={e.multimedia[1].url} /> 
      : <img src={placeholder} />} 
      <p>Publication date: {moment().format('MM/DD/YYYY', e.published_date)}</p>
      <p>Written by: {e.byline}</p>
    </div>
      ))}
        </div>)
}


export default Home