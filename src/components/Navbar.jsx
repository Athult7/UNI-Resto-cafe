import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <a className="navbar-brand" href="#">UNI RestoCafe</a>
      </nav>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">salads and soup</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/bar">From The Barnyard</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/hen">From The Hen House</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/sea">Fresh From The sea</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/biri">Biriyani</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/fast">Fast Food</Link>
        </li>

        
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar