import React from "react";


const NavBar = () =>{
    return (
      <nav className="navbar navbar-dark bg-dark">

<ul className="nav">
    <li className="nav-item">
      <a className="nav-link active text-light" href="#">Start Bootstrap</a>
    </li>
    </ul>
    <ul className="nav">
    <li className="nav-item">
      <a className="nav-link text-light" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white-50" href="#">About</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white-50" href="#">Services</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white-50 navbar-text" href="#">Contact</a>
    </li>
    </ul>
  
</nav>

        
    )
}

export default NavBar;