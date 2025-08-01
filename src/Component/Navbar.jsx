
import './Navbar.css'
import React,{useState} from "react"
import {BrowserRouter,NavLink,Link} from "react-router-dom"


const Navbar = () => {


    const [menuOpen,setMenuOpen]=useState(false); 
  return (
    <nav>
      <Link to="/" className='logo'>Benjamin</Link>
      
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/abouts">About</NavLink></li>
        <li><NavLink to="/project">Project</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>

      
    </nav>
  );
};
export default Navbar

