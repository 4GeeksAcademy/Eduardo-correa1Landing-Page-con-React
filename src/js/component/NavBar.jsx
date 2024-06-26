import React from "react";


const NavBar = () =>{
    return (
<nav className="navbar navbar-expand-lg vavbar dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Destinations</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Gallery</a>
        </li>

      </ul>
    </div>
  </div>
</nav>

        
    )
}

export default NavBar;