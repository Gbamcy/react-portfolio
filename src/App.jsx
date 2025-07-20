import { Route, Routes } from "react-router-dom"
import Navbar from "./Component/Navbar"
import Home from "./Component/Pages/Home"
import Contact from "./Component/Pages/Contact"
import Project from "./Component/Pages/Project"
import Abouts from "./Component/Pages/Abouts"
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Component/Footer"






function App() {

  return (
    <div className="App bg-light">
       <Navbar/>
       
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/abouts" element={<Abouts/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> 
      
      
      <Footer/>
    </div>
  )
}

export default App
