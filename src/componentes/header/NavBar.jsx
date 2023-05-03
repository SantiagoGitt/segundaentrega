import React from 'react'
import { Link } from 'react-router-dom'

const bar=document.getElementById("#1")
const NavBar=()=>{

return(
<div>
<nav className="navbar navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Fravega</Link>
  <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/"></Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Heladeras</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Ventiladores</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">Microondas</Link>

  </li>
  </ul>
</nav>
</div>
)
}

export default NavBar