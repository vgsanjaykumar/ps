



import { DropDown } from "./components/DropNav"

import About from "./components/About"
import Contact from "./components/Contact"

import { Route, Routes } from "react-router-dom"

import Home from "./components/Home"
import Footer1 from "./components/Footer"

import Weddinghome from "./components/Wedd/Weddinghome"





function App() {

  return (
    <>


      <DropDown />




      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/weddings/outdoor" element={<Weddinghome />} />


      </Routes>



      <Footer1 />


    </>
  )
}

export default App
