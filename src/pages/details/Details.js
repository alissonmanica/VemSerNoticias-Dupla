import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { GetContext } from '../../context/GetContext'
import placeholder from "../../img/placeholder.jpg"


function Details() {
    const {loading, getNews, news} = useContext(GetContext)
    const {id} = useParams()
    console.log(news)

    const newsDetails = news.filter(e => e.published_date === id)


  return (
    <div>
      {newsDetails.map((e) =>(
    <div>
      <h3>{e.title}</h3>
      {e.multimedia !== null ? 
      <img src={e.multimedia[1].url} /> 
      : <img src={placeholder} />} 
      <p>Publication date: {moment().format('MM/DD/YYYY', e.published_date)}</p>
      <p>Written by: {e.byline}</p>
      <p>Description: {e.abstract}</p>
    </div>
      ))}
    </div>
  )
}

export default Details