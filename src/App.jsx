import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Contact from "./Component/Pages/Contact"
import Project from "./Component/Pages/Project"
import Abouts from "./Component/Pages/Abouts"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Component/Footer"
import 'aos/dist/aos.css';
import AOS from 'aos';
import React, { useState, useEffect } from "react";
import Landing from "./Component/Pages/Landing"







function App() {

  useEffect(() => {
  AOS.init({ duration: 800 });
  }, []);

  return (
     
      <div className="App bg-light">
       <Navbar/>
       
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/abouts" element={<Abouts/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> 
      
      <Footer/>
    </div>
    
    
  )  
}

export default App



