import React from 'react'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
  <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.home}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.a}</Link>
        </li>
          <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/About">About</Link>
         </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-a dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-a disabled" aria-disabled="true" >Disabled</a>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className="form-check form-switch text-light">
      <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
      <label className="form-check-label" style={{color:'dark'?'black':'white'}}htmlFor="switchCheckDefault">Mode</label>
    </div>

    {/* <div className="form-check form-switch">
        <input className="form-check-input"  onClick={(e) => props.toggleRed(e.target.checked)} type="checkbox" role="switch" id="switchCheckDefault"/>
        <label className="form-check-label" for="switchCheckDefault">RED</label>
    </div>
    <div className="form-check form-switch">
      <input className="form-check-input"  onClick={(e)=> props.toggleYellow(e.target.checked)}  type="checkbox" role="switch" id="switchCheckDefault"/>
      <label className="form-check-label" for="switchCheckDefault">Yellow</label>
    </div>
    <div className="form-check form-switch">
      <input className="form-check-input" onClick={(e)=> props.toggleBlue(e.target.checked)}   type="checkbox" role="switch" id="switchCheckDefault"/>
      <label className="form-check-label" for="switchCheckDefault">Blue</label>
    </div> */}
    </div>
  </div>
</nav>
  )
}
  Navbar.propTypes = {
  home:PropTypes.string,
  a:PropTypes.string
};
// Navbar.defaultProps = {
//   a: 'Stranger',
//   home:'main'
// };