import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { GetContext } from '../../context/GetContext'
import placeholder from "../../img/placeholder.jpg"
import './Details.css'
import Loading from '../loading/Loading'
import Error from '../error/Error'

function Details() {
    const {loading, news, setLoading, error} = useContext(GetContext)
    const {id} = useParams()
    
    const newsDetails = news.filter(e => e.published_date === id)

    useEffect(() => {
      setLoading(false)
    },[])

    if (loading) {
      return (<Loading />)
    }

    if (error) {
      return (<Error />)
    }
  

  return (
    <div className={'details'}>
      {newsDetails.map((e) =>(
    <div className='detailsNews'>
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