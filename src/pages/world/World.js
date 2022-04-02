import React, { useContext, useEffect } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import { GetContext } from '../../context/GetContext'
import placeholder from "../../img/placeholder.jpg"
// import './World.css'

function World() {
  const {getNews, news} = useContext(GetContext)
  const navigate = useNavigate()

  useEffect(() => {
    getNews('world')
  }, [])

  return (
    <div className='containerNews'> 
      <h1>World</h1>
        <div className='newsGrid'>
        {news.map((e) =>(
        <div key={e.published_date} className='newsCard' onClick={() => navigate(`/details/${e.published_date}`)}>
        <div className='image'>
        <span>{e.section}</span>
        {e.multimedia !== null ? 
        <img src={e.multimedia[1].url} /> 
        : <img src={placeholder} />} 
        </div>
        <div>
        <h3>{e.title}</h3>
        
        <div className='alignText'><p>{e.byline}</p></div>
        <div className='alignText'><span>Published:</span> <p>{moment(e.published_date, 'YYYY/MM/DD').fromNow()}</p></div>
        </div>
        </div>
       ))}
      </div>
        </div>)
}


export default World