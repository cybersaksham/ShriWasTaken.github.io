import React from "react"
import { NavLink } from "react-router-dom";
const Navbar = ()=>{
   return(
      <nav className="navbar sticky-top navbar-expand-lg transparent" id="nav1">
      <Navliink className="brand-name" style={{color:"white"}}to="/">Shriharsh's Colosseum</Navliink>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto brand-desc text-uppercase">
          <li className="nav-item active">
            <Navliink className="nav-link " style={{color:"white"}} to="./">Home</Navliink>
          </li>
          <li className="nav-item">
            <Navliink className="nav-link"  style={{color:"white"}} to="./projects">Projects</Navliink>
          </li>
          <li className="nav-item">
            <Navliink className="nav-link" style={{color:"white"}} to="./contact">Contact</Navliink>
   </li>
        </ul>
      </div>
    </nav>
   );
};

export default Navbar;