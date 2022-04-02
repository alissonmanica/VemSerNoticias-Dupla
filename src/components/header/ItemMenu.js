import { Link } from 'react-router-dom'
import React from 'react'
import styles from "./Header.module.css"
import { useContext, useEffect } from 'react'
import { GetContext } from '../../context/GetContext'


function ItemMenu() {

  const {page} = useContext(GetContext)


  return (
    <div>
        <ul className={styles.menuHeader}>
            {page !== 'home' ? (<li><Link to="/nyttop">Home</Link></li>) : ""}
            {page !== 'health' ? (<li><Link to="/health">Health</Link></li>) : ""}
            {page !== 'politics' ? (<li><Link to="/politics">Politics</Link></li>) : ""}
            {page !== 'technology' ? (<li><Link to="/technology">Technology</Link></li>) : ""}
            {page !== 'world' ? (<li><Link to="/world">World</Link></li>) : ""}
        </ul>
    </div>
  )
}

export default ItemMenu