import { Link } from 'react-router-dom'
import React from 'react'
import styles from "./Header.module.css"

function ItemMenu() {
  return (
    <div>
        <ul className={styles.menuHeader}>
            <li><Link to="/nyttop">Home</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/politics">Politics</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/world">World</Link></li>
        </ul>
    </div>
  )
}

export default ItemMenu