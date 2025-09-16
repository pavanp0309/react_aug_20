import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="container">
      <ul className="nav nav-pills">
  <li className="nav-item">
    <NavLink className="nav-link " to={'/services/all'}>All</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to={'/services/frontend'}>Frontend</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link" to={'/services/backend'}>Backend</NavLink>
  </li>
  <li className="nav-item">
    <NavLink className="nav-link " to={'/services/fullstack'}>Fullstack</NavLink>
  </li>
</ul>
    </div>
  )
}

export default Nav
