import React, { useContext, useEffect } from 'react'
import { GetContext } from '../../context/GetContext'
import moment from 'moment'

function Home() {
  const {getNews, news} = useContext(GetContext)
  let id = 0;
  let array = []
 
 


  useEffect(() => {
    getNews('home')
    
    
  }, [])


  return (
    <div> 
      {news.map((e) =>(
      <div key={e.published_date}>
          <h3>{e.title}</h3>
          {array.push(e.multimedia)}
          {console.log(array, "aqui deus")}
          {/* <img src={array.find(ee=> ee.url !== undefined)} />
          {array.shift()} */}
          <p>Data de Publicação: {moment().format('DD/MM/YYYY', e.published_date)}</p>
          <p>Escrito por: {e.byline}</p>
          {/* {array = []} */}
      </div>
))}
        </div>)
}


export default Home