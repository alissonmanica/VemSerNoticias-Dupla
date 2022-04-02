import React, { useContext, useEffect } from 'react'
import { GetContext } from '../../context/GetContext'
import moment from 'moment'

function Health() {
  const {getNews, news, setUrlNews, loading} = useContext(GetContext)
  


  useEffect(() => {
    getNews('health')
  }, [])


  if(loading) {
    return (<h1>Loading....</h1>)
  }

  return (
    <div> 
      {news.map((e) =>(
      <div key={e.published_date}>
          <h3>{e.title}</h3>
          <img src={e.multimedia[1].url} alt="imagem" />
          <p>Data de Publicação: {moment().format('DD/MM/YYYY', e.published_date)}</p>
          <p>Escrito por: {e.byline}</p>
      </div>
))}
        </div>)
}

export default Health