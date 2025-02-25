
import Footer from "./components/Footer"
import Hero from "./components/Hero"

import Events from "./components/Event"
import Numbercount from "./components/Numbercount"
import { DropDown } from "./components/DropNav"
import Wedding from "./components/wedding"
import About from "./components/About"
import Contact from "./components/Contact"



function App() {

  return (
    <>


      <DropDown />
      <Hero />
      <Events />
      <Wedding/>
      <Numbercount />
      <About/>
      <Contact/>


      <Footer />


    </>
  )
}

export default App
