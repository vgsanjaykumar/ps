



import { DropDown } from "./components/DropNav"

import About from "./components/About"
import Contact from "./components/Contact"



import WhatsAppButton from "./components/Whatappbtn"
import {  Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Footer1 from "./components/Footer"



function App() {

  return (
    <>


      <DropDown />



      <WhatsAppButton />

      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />


      </Routes>


      <Footer1 />


    </>
  )
}

export default App
