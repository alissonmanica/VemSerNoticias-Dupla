import { Link } from 'react-router-dom'

import React from 'react'

function ItemMenu() {
  return (
    <div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/politics">Politics</Link></li>
            <li><Link to="/technology">Technology</Link></li>
            <li><Link to="/world">World</Link></li>
        </ul>
    </div>
  )
}

export default ItemMenu