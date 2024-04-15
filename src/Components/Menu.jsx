import React from 'react'
import style from "./findcoder.module.css"
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <ol id={style.MenuBlock}>
        <li><Link to="/explore">Explore Work</Link></li>
        <li><Link to="/hire">Hire Talents</Link></li>
        <li><Link to="/dev">Dev Board</Link></li>
        <li><Link to="/challenges">Challenges</Link></li>
    </ol>
  )
}

export default Menu