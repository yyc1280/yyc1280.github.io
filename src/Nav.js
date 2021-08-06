import React from "react"
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/portfolio">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
      </ul>
      <hr />
    </div>
  )
}

export default Nav
