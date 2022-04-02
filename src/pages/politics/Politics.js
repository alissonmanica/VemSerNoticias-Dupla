import React, { useContext, useEffect } from 'react'
import moment from 'moment'

import { GetContext } from '../../context/GetContext'
import placeholder from "../../img/placeholder.jpg"

function Politics() {
  const {getNews, news} = useContext(GetContext)

  useEffect(() => {
    getNews('politics')
      
  }, [])
  return (
    <div> 
      {news.map((e) =>(
      <div key={e.published_date}>
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


export default Politics;