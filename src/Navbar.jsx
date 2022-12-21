import React from "react"

const Navbar = ()=>{
   return(
      <nav className="navbar sticky-top navbar-expand-lg transparent" id="nav1">
      <a className="brand-name" style={{color:"white"}}href="#">Shriharsh's Colosseum</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto brand-desc text-uppercase">
          <li className="nav-item active">
            <a className="nav-link " style={{color:"white"}} href="./">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link"  style={{color:"white"}} href="./projects">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" style={{color:"white"}} href="./contact">Contact</a>
   </li>
        </ul>
      </div>
    </nav>
   );
};

export default Navbar;