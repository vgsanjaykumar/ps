
import Footer from "./components/Footer"
import Hero from "./components/Hero"

import Events from "./components/Event"
import Numbercount from "./components/Numbercount"
import { DropDown } from "./components/DropNav"
import Wedding from "./components/wedding"
import About from "./components/About"
import Contact from "./components/Contact"
import Hero1 from "./components/Hero-1"

import WeddingNavbar from "./components/Wedd/Wednavbar"
import WhatsAppButton from "./components/Whatappbtn"



function App() {

  return (
    <>


      <DropDown />
      <Hero1/>
      {/* <Hero /> */}
      <Events />
      <WhatsAppButton/>
      <Wedding/>
      <Numbercount />
      <About/>
      <Contact/>
      


      <Footer />


    </>
  )
}

export default App
