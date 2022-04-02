import React, { useContext, useEffect } from 'react'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'

import { GetContext } from '../../context/GetContext'
import placeholder from "../../img/placeholder.jpg"

function Politics() {
  const {getNews, news, setPage} = useContext(GetContext)
  const navigate = useNavigate()

  setPage('politics');
  useEffect(() => {
    getNews('politics')
      
  }, [])
  return (
    <div className='containerNews'> 
      <h1>Politics</h1>
        <div className='newsGrid'>
        {news.map((e) =>(
        <div key={e.published_date} className='newsCard'>
        <div className='image'>
        <span>{e.section}</span>
        {e.multimedia !== null ? 
        <img src={e.multimedia[1].url} onClick={() => navigate(`/details/${e.published_date}`)}/> 
        : <img src={placeholder} />} 
        </div>
        <div>
        <h3 onClick={() => navigate(`/details/${e.published_date}`)}>{e.title}</h3>
        
        <div className='alignText'><p>{e.byline}</p></div>
        <div className='alignText'><span>Published:</span> <p>{moment(e.published_date, 'YYYY/MM/DD').fromNow()}</p></div>
        </div>
        </div>
       ))}
      </div>
        </div>)
}


export default Politics;